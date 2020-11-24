import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import {Link} from "react-router-dom";

const Home = () =>{
    const [user, setUser] = useState([]);
    useEffect(()=> {
        loadUsers();
    }, [])

    const loadUsers = async () =>{
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers();
    }

    return(
        <div className="container">
            <div className="py-4">
                <h1> Home page </h1>


                <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name </th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
      {
          user.map((user, index) =>(
          <tr>
              <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.Username}</td>
          <td>{user.email}</td>
          <td>
              <Link class="btn btn-primary mr-2"  to={`/users/${user.id}`}>
                  View
                  </Link>
              <Link class="btn btn-outline-primary mr-2" to={`/user/edit/${user.id}`}>
              Edit
              </Link>
              <Link class="btn btn-danger mr-2" onClick={()=> deleteUser(user.id)}>
                  Delete
                  </Link>
          </td>
          </tr>

    ))
      }
   
  </tbody>
</table>
            </div>
        </div>

    )
}

export default Home;
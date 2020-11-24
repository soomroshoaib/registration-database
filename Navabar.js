import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navabar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
            <a className="navbar-brand" to="#">
                React User
            </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
      </li>
     
      <li className="nav-item">
        
      </li>
    </ul>
   
  </div>
  <Link className="btn btn-light mr-2" to="/user/add">Add User</Link>
 </div>
  
</nav>
    
    )
}

export default Navabar;


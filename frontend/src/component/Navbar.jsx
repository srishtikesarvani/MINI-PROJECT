import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <div>
         <nav class="navbar navbar-expand-lg " style={{backgroundColor:'rgb(13, 13, 75)'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="rent.png" alt=""  height={50}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link text-light" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/signup">
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/rent">
            AddRentableRoom
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/manage">
            ManageRoom
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/browse">
            BrowseRoom
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link text-light" to="/veiw">
            VeiwRoom         </NavLink>
        </li> */}
        
       
       
      </ul>
     
    </div>
  </div>
</nav>  
     </div> 
  )
}

export default Navbar
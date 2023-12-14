import React from 'react'
import { NavLink } from 'react-router-dom'
import UseAppContext from '../AppContext';

const Navbar = () => {
  const {loggedin , logout} = UseAppContext();
  const showOption =()=>{
      if(loggedin){
        return(
        <li className='nav-item'>
<button className='btn btn-danger' onClick={ logout } >Logout</button>
        </li>
        )
      }
    }
  return (
     <div>
         <nav class="navbar navbar-expand-lg " style={{backgroundColor:'gray'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="rent.png" alt=""  height={50}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-">
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
        
        {showOption()}
       
      </ul>
     
    </div>
  </div>
</nav>  
     </div> 
  )
}

export default Navbar
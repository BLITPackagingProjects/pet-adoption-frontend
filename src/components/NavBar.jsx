import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
        <ul>{localStorage.getItem('token')?null:
            
            <Link to="/login">
            <li>LogIn</li>

            </Link>
            
            }
            <Link to="/login">
            <li>Register</li>
                
            </Link>
            <Link to="/app">
            <li>Applications</li>
            
            </Link>
            <Link to="/pets">
            <li>Pets</li>
            </Link>
           
                <Link to="/logout">
                <li>Log Out</li>
            </Link>
        </ul>
    </>
  )
}

export default NavBar
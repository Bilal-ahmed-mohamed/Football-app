import React from 'react'
import {Link} from 'react-router-dom'

const  Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul>
           <Link to= "/" >Standings</Link>
           <Link to="/Fixtures" >Fixtures</Link>
        </ul>
       
            
        
      </nav>
    </div>
  )
}

export default Navbar;

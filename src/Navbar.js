import React from 'react';
import DeblurIcon from '@mui/icons-material/Deblur';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Link to='/'>
    
        <div className='navbar '>
          
           <h1>  < DeblurIcon className="icon" /> Crypto <span className='purple'>Explore</span></h1>
           
        </div>
    </Link>
  )
}

export default Navbar
import React from 'react';
import {Link} from 'react-router-dom'
import { BiCart } from 'react-icons/bi';
import './navbar.css';


export const Navbar = () => {
  return (
    <div className='navbar  '>
        <div className='links'>
             <Link to="/" > shop </Link>
             <Link to='/cart' > <BiCart size={32}/> </Link> 
             <Link to='/context'> Context</Link>
        </div>
    </div>
  )
}

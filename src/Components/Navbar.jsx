import React from 'react'
import { Link } from "react-router-dom";

import { MdFilterList,MdFavorite } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiFillPlayCircle } from 'react-icons/ai';
import "../Styles/navbar.css"

const Navbar = () => {
  return (
    <>
    <header className="header" >
 
    <nav className="navbar">
  
      <ul>
   

        <li>
        <Link to='/'>
          <div className='flex'>  <div style={{marginRight:"8px"}}><MdFilterList/></div> Home</div>
          </Link>
        </li>
        <li>
          <a href="#">
            <div className='flex'><div style={{marginRight:"8px"}}><BiSearchAlt2/> </div>Search</div>
          </a>
        </li>
        <li>
        <Link to='/favorites'>
          <div className='flex'>  <div style={{marginRight:"8px"}}> <MdFavorite/></div> Favorites</div>
          </Link>
        </li>
        <li>
        <Link to='/playlist'>
          <div className='flex'> <div style={{marginRight:"8px"}}> <AiFillPlayCircle/> </div> Playlist</div>
          </Link>
        </li>
      </ul>
    </nav>
   </header>
  </>
  )
}

export default Navbar
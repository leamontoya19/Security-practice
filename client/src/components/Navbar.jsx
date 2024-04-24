import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={ Logo } alt='logo'/>
        </div>
        <div className="links">
          <Link className='link' to="/?cat=action">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=comedy">
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to="/?cat=drama">
            <h6>BOOKS</h6>
          </Link>
          <Link className='link' to="/?cat=thriller">
            <h6>FOOD</h6>
          </Link>
          <Link className='link' to="/?cat=romance">
            <h6>DESIGN</h6>
          </Link>
          <span>Anna</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar
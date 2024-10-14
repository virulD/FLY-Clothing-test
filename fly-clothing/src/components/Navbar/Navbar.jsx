import React from 'react'
import './Navbar.css'
import logo from '../../assets/fly-logo-final.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
        </ul>
        <div></div>
    </nav>
  )
}

export default Navbar
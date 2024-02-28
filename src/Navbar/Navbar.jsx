import React, {useState} from 'react';
import './navbar.css';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {IoIosCloseCircle} from 'react-icons/io';
import {PiDotsNineBold} from 'react-icons/pi';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    // Function to toggle navBar
    const showNav = () => {
      setActive('navBar activeNavBar')
    }
    // Function to remove navBar
    const removeNav = () => {
      setActive('navBar')
    }
  return (
    <section className='navBarSection'>
        <header className="header flex">

              <div className="logoDiv">
                <a href="_#" className='logo flex'>
                  <h1> <MdOutlineTravelExplore className="icon"/>
                  Travel.</h1>
                </a>
              </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className='btn'><a href="#">Book Now</a></button>
          </ul>

        <div onClick={removeNav} className="closeNavbar">
          <IoIosCloseCircle className="icon"/>
        </div>

        </div>
        
        <div onClick={showNav} className="toggleNavbar">
          <PiDotsNineBold className="icon"/>
        </div>

        </header>
    </section>
  )
}

export default Navbar;
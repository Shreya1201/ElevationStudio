import React from 'react'
import Navbar from '../components/Navbar'
import GlobalStyle from '../components/globalStyle'
import Dropdown from '../components/Dropdown'
import { useState } from 'react'

const NavbarG = () => {
    const[isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
      setIsOpen(!isOpen);
    };
  return (
    <div className='Nav'>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
    </div>
  )
}

export default NavbarG

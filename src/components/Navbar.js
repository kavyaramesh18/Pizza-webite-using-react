import React,{useState} from 'react'
import Logo from '../images/pizzaLogo.png'
import {Link} from "react-router-dom"
import "../components/styles/Navbar.css"
// import RenderIcon from "@material-ui/icons/Reorder";
// import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

    const [openLinks,setOpenLinks]=useState(false);

    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks?"open":"close" }>
        <img src={Logo}/>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link> 
        <button onClick={toggleNavbar}/>  
      </div>
    </div>
  )
}

export default Navbar

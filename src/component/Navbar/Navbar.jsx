import React, { useState } from 'react'
import './Navbar.css'
 import {BiMenuAltRight} from 'react-icons/bi'
 import {HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const [menuOpened,setMenuOpened]=useState(false)
  const [color,setColor]=useState(false)
  const changeColor=()=>{
    if(window.scrollY>=320){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)
  return (
    
      <div className={color?'header header-bg' : 'header'} >
        
              <img src='./ican.png' alt='' className='logo'/>
              <div className='header-menu'>
    <Link to="/" ><li>الرئيسية</li> </Link>
    <Link to='#about' smooth><li >من نحن</li></Link> 
     <Link to='#sections'><li >أقسامنا ومنتجاتنا</li></Link>
     <Link to='#news' ><li > أخر الأخبار</li></Link>
     <Link to='#contact'><li >تواصل معنا</li></Link>
     <Link to='#join'><li   className='btn1'>  انضم لنا</li></Link>

     </div>
      
        
     <ul className={menuOpened ? "open":""}>
     <Link to="#home" ><li>الرئيسية</li> </Link>
    <Link to='#about' smooth><li >من نحن</li></Link> 
     <Link to='#sections'><li >أقسامنا ومنتجاتنا</li></Link>
     <Link to='#news' ><li > أخر الأخبار</li></Link>
     <Link to='#contact'><li >تواصل معنا</li></Link>
     <Link to='#join'><li   className='btn1'>  انضم لنا</li></Link>

     </ul>
     

     <div className="menu-icon" onClick={()=>{setMenuOpened(!menuOpened)}}  >
        <BiMenuAltRight size={30} />
      </div>
      
     
      </div>
    
  )
}

export default Navbar

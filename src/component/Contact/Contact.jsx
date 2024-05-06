import React from 'react'
import './Contact.css'
import { Fade,Rotate } from "react-awesome-reveal";
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact' id='contact'>
     <div className="left-contact">
      
     <Fade direction='right'  delay={7}><h1>تواصل  <span>معنا</span></h1></Fade>
     <div className="info">
      <Fade direction='up'>     <li><img src='./phone.png' width={20}  alt=''/>963999136824+</li>
</Fade>
   <Fade direction='down'><li><img src='./gmail.png' width={20} alt=''/>ican.aleppo@gmail.com</li></Fade>  
  <Fade direction='down'> <Link to={'https://www.facebook.com/profile.php?id=61554822892511&mibextid=vk8aRt'}><li><img src='./facebook.png' width={20} alt=''/>www.facebook.com/iCAN.Aleppo</li></Link> </Fade> 

     <Fade direction='up'>
     <li><img src='./adress.png' width={20} alt=''/>Syria/Aleppo</li>
     </Fade>

     </div>
     
     </div>
     <div className="right-contact">
     <Rotate  >
      <div
         className="maincircle">
      <Link to={'https://www.youtube.com/@icanaleppo'}><div className="second-circle">
        <img src='./youtube.png' alt='' />
      </div></Link>
      <Link to={'https://www.linkedin.com/company/ican-aleppo/'}>
      <div className="second-circle">
        <img src='./linked.png' alt='' />
      </div></Link>
      <Link to={'https://www.instagram.com/ican.aleppo?igshid=MmVlMjlkMTBhMg=='}>
      <div className="second-circle">
        <img src='./insta1.png' alt='' />
      </div></Link>
      <Link to={'https://t.me/+8ieZrxCO-0w4M2Jh'}>
      <div className="second-circle">
        <img src='./telegram.png' alt='' />
      </div>
      </Link>
      <Link to={'https://www.icanaleppo.com'}>
      <div className="second-circle">
        <img src='./web.png' alt='' />
      </div></Link>
    
       <div className="back-circle yellow"> </div>
      <div className="back-circle black"> </div>
      </div>
      </Rotate>
     </div>
    

     </div>
  )
}

export default Contact

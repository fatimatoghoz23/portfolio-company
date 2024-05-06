import React from 'react'
import './About.css'
import { Fade } from "react-awesome-reveal";
import {HashLink as Link } from 'react-router-hash-link'

function About() {
  return (
    <div id='about' className='about'>
     <div className="left-about">
      <span>عن ICAN</span>
     <Fade direction='up' ><h1>من <span>نحن</span></h1></Fade>
     <p><q> شركة هندسية للاستشارات والحلول البرمجية والتقنية وكل مايتعلق بتكنولوجيا المعلومات والاتصالات جاهزون لتصميم 
      وبرمجة برامج ويندوز وتطبيقات الاندرويد والايفون بالاضافة لمواقع الويب </q>
     </p>
     <p>  بإدارة المهندس : باسل تنبكجي </p>
     <Fade direction='right'><Link to='#contact'><button className='button'>اتصل بنا<i></i></button></Link></Fade>

     </div>
     <div className="right-about">
      <Fade direction='up'  >
        <div>
      <div className="card card1" >
      </div>
      </div>
      
      </Fade>
      <Fade direction='down'   >
        <div>
      <div className="card card2">
     
      </div>
      </div>
      </Fade>
     <Fade direction='down' >
      <div>
     <div className="card card3" >
     
      </div></div>
     </Fade>
      
     </div>
    </div>
  )
}

export default About

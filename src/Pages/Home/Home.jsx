import React, { Suspense } from 'react'
import './Home.css'
import {motion} from 'framer-motion'
import { Fade } from "react-awesome-reveal";
import About from '../../component/About/About';
import Sections from '../../component/Section/Sections';
import Slider from '../../component/Slider/Slider';
import Contact from '../../component/Contact/Contact';
import Join from '../../component/Join/Join';
import {HashLink as Link } from 'react-router-hash-link'

function Home() {
  
  const trans={type:'spring',duration:3}
  return (
<>
      <div className="home" id='home'>
        
        <div className='blur home-blur'></div>
      <div className="left">
      <div className="solutions">
        <motion.div
        initial={{right:'130px'}}
        whileInView={{right:'8px'}}
        transition={{...trans,type:'tween'}}>

        </motion.div>
        <span>Technical Solutions</span>
      </div>
      <div className="home-text">
      <Fade direction='down'  delay={8}>
      <div className='container-words'>
          <span>  للاستشارات والحلول </span>
          <div className='rotate' >
          <span > البرمجية </span>
          <span > التقنية  </span>

          </div>
          
          </div>
      </Fade >
        <Fade  direction='up' delay={9} >         
             <span> كل مايتعلق بتكنولوجيا المعلومات والاتصالات </span>
             <div className="home-buttons">
        <Link to='#contact'><button className='button button1'>اتصل بنا<i></i></button></Link>
        <Link to='#join'><button  className='button button2'>ابدأ مشروعا<i></i></button></Link>

      </div>
     </Fade>
        
      </div>
    
      </div>
     
      
      <div className="right">

      
            
      <div className='blur2 home-blur2'></div>
      
      <div>
        <img src='./ss.png' width={500} height={500} className='image' />
        </div>

        

          </div>
        
      </div>
      <About/>
  <Sections/>
  <Slider/>
  <Contact/>
  <Join/> 
      </>
      
  )
  
}

export default Home

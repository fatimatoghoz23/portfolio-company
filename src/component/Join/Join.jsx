import React from 'react'
import './Join.css'
import { Fade } from "react-awesome-reveal";

function Join() {
  return (
    <>
    <div className='j'>
      <div className="join" id='join'>
        
        <div className="left-join">
     <Fade direction='up' ><h1>انضم إلينا</h1></Fade>
     <p><strong>جاهزون لتصميم وبرمجة برامج ويندوز وتطبيقات الاندرويد والايفون ومواقع الويب لإدارة أعمالكم بشكل سلس وكامل 
     </strong>
     </p>

     </div>
     <div className="right-join">
     <div className="input">
          <div className="s-input ">
           <div className="row">
           <input placeholder='الاسم الكامل' />
            
            <input placeholder='الجنس'></input>
           </div>
              <label>الميلاد:</label>
              <input type='date' placeholder='الميلاد'></input>

              <input placeholder='الحالة العسكرية'></input>

              <input placeholder=' التخصص'></input>
              <label>السيرة الذاتية:</label>
              <input type='file' placeholder=' السيرة الذاتية'></input>

              <textarea placeholder=' تكلم عن نفسك'></textarea>

          </div>
          <button className='s-button'>إرسال</button>
        </div>
     </div>

      </div>

      <div className='blur3 '></div>
      <h3>To Achieve Your Future Vision We Can Achieve It For You</h3>

    </div>
    </>
  )
}

export default Join

import React from 'react'
import './Sections.css'
import { Fade } from "react-awesome-reveal";
const data =[
  {
    name:"البرمجيات",
    image:"./pp.jpg",
    text:"برامج ويندوز وتطبيقات الموبايل والمواقع الالكترونية "
  },
  {
    name:"الدعم التقني",
    image:"/dd.jpg",
    text:"السوفت وير لجميع الاجهزة الالكترونية من موبايلات  الى الراوترات والشبكات"

  },
   {
    name:"المونتاج",
    image:"/m.jpg",
    text:"انشاء فيديوهات رقمية اعلانية ومتحركة "

  },
   {
    name:"التصاميم والغرافيكس",
    image:"/ت.png",
    text:"انشاء وتصميم هويات بصرية ولوغو "

  },
  {
    name:"التسويق الرقمي",
    image:"/s.jpg",
    text:"انشاء حملات تسويقية رقمية عبر اليريد الالكتروني والمحتوى  وعبر مواقع التواصل الاجتماعي"

  },
  {
    name:"خاص لمشاريع التخرج",
    image:"/tt.jpg",
    text:"لطلاب الهندسة المعلوماتية والحواسيب والاتصالات "

  },
  
]
function Sections() {
  return (
    <div class="features" id='sections'>
      <Fade direction='down' delay={5}><div> <h1 class="main-title">أقسامنا ومنتجاتنا</h1></div>   
      </Fade>
    <Fade   delay={12}>
    <div>
    <div class="container">
    {data.map((d,i)=>
      (
        <div class="box progrmming">
        <div class="img-holder">
          <img src={d.image}/>
        </div>
        <h2>{d.name}</h2>
        <p>{d.text} </p>
        <a href="#">المزيد</a>
      </div>
      ))}
    
      
    </div>
    </div>
    </Fade>
  </div>
   
  )
}

export default Sections

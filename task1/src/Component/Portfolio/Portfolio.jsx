import React from 'react'
import img2 from "../../Assets/imgs/2.png"
import img4 from "../../Assets/imgs/1.png"
import img5 from "../../Assets/imgs/port3.png"


export default function Portfolio() {
  return (
    <>
    <div>
    <h1 className='portfolio text-center py-5'>PORTFOLIO COMPONENT</h1>
    <p className='pa w-50 m-auto'><span><i className="fa-solid fa-star"></i></span></p>
    </div>
   

    <div className='main'>
    
    <img className='pic' src={img2} alt="" />
    <img className='pic' src={img4} alt="" />
    <img className='pic' src={img5} alt="" />


    </div>
    <div className='main'>
    
    <img className='pic' src={img5} alt="" />
    <img className='pic' src={img2} alt="" />
    <img className='pic' src={img4} alt="" />


    </div>
    
    
    
    </>
  )
}

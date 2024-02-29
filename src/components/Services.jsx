import React from 'react'
import './Services.css'
import Servicecomp from './Servicecomp'
import { GrServices } from "react-icons/gr"; 
const Services = () => {
  return (
    <div className='services'>
        
        {/* icons can be changed according to our need */}
        <div className="service_combo">
            <Servicecomp id='1' icon = {<GrServices size={35}/>}/>   
            <Servicecomp id='2' icon = {<GrServices size={35}/>}/>
        </div>
        <div className="service_combo">
            <Servicecomp id='3' icon = {<GrServices size={35}/>}/>
            <Servicecomp id='4' icon = {<GrServices size={35}/>}/>
        </div>
        <div className="service_combo">
            <Servicecomp id='5' icon = {<GrServices size={35}/>}/>
            <Servicecomp id='6' icon = {<GrServices size={35}/>}/>
        </div>
        <div className="service_combo">
            <Servicecomp id='7' icon = {<GrServices size={35}/>}/>
            <Servicecomp id='8' icon = {<GrServices size={35}/>}/>
        </div>
        <div className="service_combo">
            <Servicecomp id='9' icon = {<GrServices size={35}/>}/>
            <Servicecomp id='10' icon = {<GrServices size={35}/>}/>
        </div>
        <div className="service_combo">
            <Servicecomp id='11' icon = {<GrServices size={35}/>}/>
            <Servicecomp id='12' icon = {<GrServices size={35}/>}/>
        </div>
        <div className="last_btn_service">Browse Services</div>
    </div>
  )
}

export default Services
import React from 'react'
import './Servicecomp.css'

const Servicecomp = (props) => {
  return (
    <div className='service_comp'>
        <div className="service_icon">{props.icon}</div>
        <div className="service_detail">
            <span className="service_name">Service #{props.id}</span>
            <span className="service_des">This is the item description</span>
        </div>
    </div>
  )
}

export default Servicecomp
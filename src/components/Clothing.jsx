import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"; 
import './Clothing.css'
const Clothing = () => {
  return (
    <div className='clothing_comp'>
        <div className="clothing_up">
            <div className="clothing_up_left">
                <div className="heading">Accessories</div>
                <div className="options">
                    <div className="option"><span>Beanies</span><MdKeyboardArrowRight size={30}/></div>
                    <div className="option"><span>Caps & Hats</span><MdKeyboardArrowRight size={30}/></div>
                    <div className="option"><span>Glasses</span></div>
                    <div className="option"><span>Gloves</span></div>
                    <div className="option"><span>Jewellery</span></div>
                    <div className="option"><span>Scarves</span></div>
                    <div className="option sp"><span>All Accessories</span></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="clothing_up_left">
            <div className="heading">Bottoms</div>
                <div className="options">
                    <div className="option"><span>Casual Trousers</span></div>
                    <div className="option"><span>Jeans</span><MdKeyboardArrowRight size={30}/></div>
                    <div className="option"><span>Leggings</span></div>
                    <div className="option"><span>Shorts</span></div>
                    <div className="option sp"><span>All Bottoms</span></div>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="clothing_up">
            <div className="clothing_up_left">
            <div className="heading">Jackets</div>
                <div className="options">
                    <div className="option"><span>Blazers</span></div>
                    <div className="option"><span>Bomber jackets</span></div>
                    <div className="option"><span>Denim Jackets</span></div>
                    <div className="option"><span>Duffle Coats</span></div>
                    <div className="option"><span>Leather Jackets</span></div>
                    <div className="option"><span>Parkas</span></div>
                    <div className="option sp"><span>All Jackets</span></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="clothing_up_left">
            <div className="heading">Tops</div>
                <div className="options">
                    <div className="option"><span>Cardigans</span></div>
                    <div className="option"><span>Coats</span></div>
                    <div className="option"><span>Polo Shirts</span></div>
                    <div className="option"><span>Shirts</span></div>
                    <div className="option"><span>T-Shirts</span><MdKeyboardArrowRight size={30}/></div>
                    <div className="option"><span>Vests</span></div>
                    <div className="option sp"><span>All Tops</span></div>
                </div>
            </div>
        </div>
        <div className="last_btn">All Clothing</div>
    </div>
  )
}

export default Clothing
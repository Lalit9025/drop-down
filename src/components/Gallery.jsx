import React from 'react'
import './Gallery.css'


const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="gallery_combo">
            <div className="gallery_element">
                <img src="/p1.jpg" alt='img'/>
                <span className="product_name">Product #1</span>
            </div>
            <div className="gallery_element">
               <img src="/p1.jpg" alt='img'/>
                <span className="product_name">Product #2</span>
            </div>
        </div>
        <div className="gallery_combo">
            <div className="gallery_element">
                <img src="/p1.jpg" alt='img'/>
                <span className="product_name">Product #3</span>
            </div>
            <div className="gallery_element">
                <img src="/p1.jpg" alt='img'/>    
                <span className="product_name">Product #4</span>
            </div>
        </div>
        <div className="last_btn_gallery">Browse Gallery</div>
    </div>
  )
}

export default Gallery
import React, { useEffect, useState } from 'react';
import './DropDown.css';
import { MdKeyboardArrowRight } from "react-icons/md"; 
import Clothing from './Clothing';
import Services from './Services';
import Gallery from './Gallery';

const DropDown = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleHover = (component) => {
    setActiveComponent(component);
  };

  const clearActiveComponent = () => {
    setActiveComponent(null);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.main_dropdown')) {
        setActiveComponent(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="drop" onMouseLeave={clearActiveComponent}>
      <div className='main_dropdown'>
        <div className="search" onMouseEnter={() => handleHover('null')}>Search...</div>
        <div
          className='clothing mp'
          onMouseEnter={() => handleHover('clothing')}
        >
          <span>Clothing</span>
          <MdKeyboardArrowRight size={30}/>
        </div>
        <div
          className='clothing mp'
          onMouseEnter={() => handleHover('gallery')}
        >
          <span>Gallery</span>
          <MdKeyboardArrowRight size={30}/>
        </div>
        <div
          className='clothing mp'
          onMouseEnter={() => handleHover('services')}
        >
          <span>Services</span>
          <MdKeyboardArrowRight size={30}/>
        </div>
        <div className="divider" onMouseEnter={() => handleHover('null')}>DIVIDER</div>
        <div className="pages mp"  onMouseEnter={() => handleHover('null')}>Page 1</div>
        <div className="pages mp"  onMouseEnter={() => handleHover('null')}>Page 2</div>
        <div className="pages mp"  onMouseEnter={() => handleHover('null')}>Page 3</div>
      </div>
      <div className="dropdown_left">
        {activeComponent === 'clothing' && <Clothing />}
        {activeComponent === 'services' && <Services />}
        {activeComponent === 'gallery' && <Gallery />}
      </div>
    </div>
  );
};

export default DropDown;


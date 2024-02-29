import React, { useState } from 'react';
import './Button.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDown from './DropDown';
import { RxCross2 } from "react-icons/rx";
const Button = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='btn'>
      <div className="inner_btn" style={{ backgroundColor: show ? 'green' : 'black' }} onClick={() => setShow(prev => !prev)}>
        Dropdown
        { !show ? <MdKeyboardArrowDown size={35} /> : <RxCross2 size={35} />}
      </div>
      {show && (
        <div className="drop_down">
          <DropDown/>
        </div>
      )}
    </div>
  );
}

export default Button;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [toggleIcon, setToggleIcon] = useState('light.jpg');

    const toggleFunction = () => {
        if(toggleIcon==='light.jpg'){
            setToggleIcon('dark.jpg');
        }
        if(toggleIcon==='dark.jpg'){
            setToggleIcon('light.jpg');
        }
    }

  return (
    <div id='navbar'>
      <div id="namelogo">
        <h1 onClick={()=> navigate('/home')}>dk</h1>
      </div>

        <div id='nav-buttons'>
        <div onClick={()=>{navigate("/home")}}>home</div>
        <span>|</span>
        <a href="gfg.com">articles</a>
        {/* <span>|</span>
        <a href="blog.com">blog</a> */}
        <span>|</span>
        <div onClick={()=>{navigate("/contact")}}>contact</div>
        <span>|</span>
        <div onClick={()=>navigate('/hireme')} >hire me</div>

        <button id="theme-change-btn" onClick={toggleFunction}>{toggleIcon}</button>
     </div>
    </div>
  );
};

export default NavBar;

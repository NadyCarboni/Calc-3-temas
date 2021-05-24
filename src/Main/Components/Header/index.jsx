import './style.css';
import React from "react";

export const Header = ()=> {
  return (
  <header>
   <h1>calc</h1>
   <div className="input-box"> <h4>Theme</h4>
   <div className="numbers-input-box">
       <div className="numbers">
           <span>1</span>
           <span>2</span>
           <span>3</span>
       </div>
   <input type="range" min="1" max="3" defaultValue="1"></input></div></div>
  </header>
);
};



  
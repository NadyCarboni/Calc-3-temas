import './style.css';
import React from "react";



export const CalcBody = ()=> {
  return (
<div className="calculator">
   <input className="visor" type="text" disabled="disabled"/>
   <div className="numbers-calc">
  
   <div>7</div>
      <div>8</div>
       <div>9</div>
      <div>DEL</div>
    <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>+</div>
      
      <div>3</div>
      <div>2</div>
      <div>1</div>
      <div>-</div>
    <div>.</div>
      <div>0</div>
      <div>/</div>
      <div>x</div>
      <div className="reset">Reset</div>
       <div className="equal">=</div>
   </div>
</div>
);
};

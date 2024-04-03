import React from 'react';
import { useState } from "react";

function ListView(props) {

    const [selectedIndex,setSelectedIndex] = useState(-1);

    const test = ()=>{
        console.log("HI");
    }

  return (
    <>

    
    <ul className="list-group">
      {props.itemArray && props.itemArray.map((item,index) => (<li key={index} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={()=>setSelectedIndex(index)}> {item} </li>))}
      </ul>
    
    </>
  )
}

export default ListView
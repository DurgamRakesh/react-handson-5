import React from 'react'
import HOCComponent from './HOCComponent';

const MouseOverCounter = (props) => {
    const {counter,UpdateCounter} = props;
  return (
    <div>
        
            <h2>MouseOverCounter</h2>
            <p>Counter : {counter}</p>
            <button style={{padding:'10px',backgroundColor:'limegreen',color:'white',borderRadius:'25px',cursor:'pointer'}} onMouseOver={UpdateCounter}>MouseOver-Increment</button>
        
    </div>
  )
}

export default HOCComponent(MouseOverCounter)
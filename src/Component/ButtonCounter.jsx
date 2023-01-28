import React from 'react'
import HOCComponent from './HOCComponent';

const ButtonCounter = (props) => {
  const {counter,UpdateCounter} = props;
  return (
    <div>
      <div>
        <h2>ButtonCounter</h2>
        <p>Counter : {counter}</p>
        <button style={{cursor:'pointer',padding:'10px',backgroundColor:'limegreen',color:'white',borderRadius:'25px'}} onClick={UpdateCounter}>Button-Increment</button>
      </div>
    </div>
  )
}

export default HOCComponent(ButtonCounter)
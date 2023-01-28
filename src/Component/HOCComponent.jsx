import React from 'react'
import { useState } from 'react'

const HOCComponent = (WComponent) => {
    function HOCComponent(){
        const [counter,setCounter] = useState(0)
        const UpdateCounter = () => {
            setCounter(counter+1);
        }
        return (
            <div>
                <WComponent counter = {counter} UpdateCounter={UpdateCounter}/>
            </div>
          )
    }
    return HOCComponent;
  
}

export default HOCComponent
import React from 'react'
import ButtonCounter from './Component/ButtonCounter'
import HOCComponent from './Component/HOCComponent'
import MouseOverCounter from './Component/MouseOverCounter'
import './App.css'


const App = () => {
  return (
    <div className='maindiv'>
      <h1>HOC Component</h1>
      <ButtonCounter/>
      <MouseOverCounter/>
      <HOCComponent/>
    </div>
  )
}

export default App
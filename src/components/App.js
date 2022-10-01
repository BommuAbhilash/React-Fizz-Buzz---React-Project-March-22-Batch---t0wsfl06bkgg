import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [count,setCount] = useState(1);
  const isEnabled = false;

  const handleIncrement = () => {
    setCount(count+1);
  }
  
  const handleDecrement = () => {
    setCount(count-1);
  }

  

  return (
    <div id="main">
      <button  onClick={handleIncrement}>Increment</button>
      <p className={(count%3==0 && count%5==0) ? "fizzbuzz" : (count%3==0) ? "fizz" : (count%5==0) ? "buzz" : "normal"}>{count}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}


export default App;
// 
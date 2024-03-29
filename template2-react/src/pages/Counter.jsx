import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      alert("Number of clicks: " + counter);
    });
  
    function increment() {
      setCounter(counter+1);
    }
    return <div>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    </div>;
  }


export default Counter 
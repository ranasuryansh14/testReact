import { useState } from "react";

const Price = () =>{

    const [counter, setCounter] = useState(0);

    const increment = () => {
      setCounter(counter + 1);
    };
  
    const decrement = () => {
      setCounter(counter - 1);
    };
  
    return <>
     <div className="main">
        <button className="btn" onClick={increment}>+</button>
        <p className="para">Counter: {counter}</p>
        <button className="btn" onClick={decrement}>-</button>
      </div>
      </>
  
  }
export default Price;
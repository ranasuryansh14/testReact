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
      <div>
        <p>Counter: {counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      </>
  
  }
export default Price;
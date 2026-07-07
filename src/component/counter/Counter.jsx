import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  };

  return (
    <div>
      <p>{count}</p>
      <p onClick={handleIncrement}>increment</p>
    </div>
  );
};

export default Counter;

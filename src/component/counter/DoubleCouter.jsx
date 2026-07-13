import { useState } from "react";

const DoubleCouter = () => {
  const [count, setCount] = useState(0);
  const handleDoubleCouter = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={handleDoubleCouter}>double click </button>
      <p>{count}</p>
    </div>
  );
};

export default DoubleCouter;

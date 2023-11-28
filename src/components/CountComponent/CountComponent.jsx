import { useState } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(1);

    const handleAddCount = () => {
        setCount(count + 1);
    }

    const handleRemoveCount = () => {
        setCount(count - 1);
    }


  return (
    <div>
      <button onClick={handleAddCount}>+</button>
      <div>{count}</div>
      <button onClick={handleRemoveCount}>-</button>
    </div>
  );
};

export default CountComponent;

import { useState } from "react";
import { CouterProps } from "./Counter.type";

const useCounter = ({ initialCount = 0 }: CouterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};
export default useCounter;

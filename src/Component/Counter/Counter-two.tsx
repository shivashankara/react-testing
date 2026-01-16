import { CounterTwoProps } from "../CustomHook/Counter.type";

const CounterTwo = (props: CounterTwoProps) => {
  const { count, handleIncrement, handleDecrement } = props;
  return (
    <>
      <h1>Counter 2 component</h1>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </>
  );
};
export default CounterTwo;

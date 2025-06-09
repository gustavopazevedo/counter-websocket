import "./counter.css";

type CounterProps = {
  count: number;
  setCount: (count: number) => void;
};
const Counter = ({ count = 0, setCount }: CounterProps) => {
  return (
    <div className="counter">
      <h1 className="counter__title">Counter</h1>
      <p className="counter__count">{count}</p>
      <button className="counter__button" onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
};

export default Counter;

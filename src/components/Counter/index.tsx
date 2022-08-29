import React, { useState } from "react";

interface ICounter {
  counter: number;
}

export function Counter() {
  const [state, setState] = useState<ICounter>({
    counter: 0,
  });

  const onIncrement = () => {
    setState({
      counter: state.counter + 1,
    });
  };

  const onDecrement = () => {
    setState({
      counter: state.counter - 1,
    });
  };

  return (
    <div>
      <p>카운터</p>
      <div>{state.counter}</div>
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
}

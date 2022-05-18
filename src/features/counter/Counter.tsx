import React, { useState, useEffect } from "react";

import type { RootState } from "../../rootReducer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {};
  }, []);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </>
  );
};

export default Counter;

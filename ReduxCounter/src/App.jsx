import React from "react"
import { useDispatch } from "react-redux";
import { decrement, decrementBySomeValue, increment, incrementBySomeValue } from "./reducer";
import { useSelector } from "react-redux";
function App() {

  const value = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment())
  }

  const dec = () => {
    dispatch(decrement())
  }


  const incByValue = () => {
    dispatch(incrementBySomeValue(20))
  }

  const decByValue = () => {
    dispatch(decrementBySomeValue(20))
  }

  return (
    <>
      <h1>{value}</h1>
      <br />
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={incByValue}>IncrementBySomeValue</button>
      <button onClick={decByValue}>DecrementBySomeValue</button>
    </>
  )
}

export default App

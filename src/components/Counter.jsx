import { useState } from "react";

export default function Counter({value = 0}) {
  const [count, setCount] = useState(value);
  const increment = () => {
    if(count >= 0) { setCount(count + 1) }
  }
  const decrement = () => {
    if(count > 0) { setCount(count - 1) }
  }

  return (
    <>
      <div>{ count }</div>
      <button onClick={increment} type="button">increment</button>
      <button onClick={decrement} type="button">decrement</button>
    </>
  )
}
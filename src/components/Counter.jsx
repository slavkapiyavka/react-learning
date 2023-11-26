import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
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
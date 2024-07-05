import { useState } from "react";

export default function CounterEx() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You Clicked {count} times !</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

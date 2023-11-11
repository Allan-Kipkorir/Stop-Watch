import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [startInterval, setStartInterval] = useState(null);
  const [now, setNow] = useState(null);
  const IntervalRef = useRef(null);

  const handleStart = () => {
    setStartInterval(Date.now());
    setNow(Date.now());

    //function javascript used to set now state variable every 10 seconds
    clearInterval(IntervalRef.current);
    IntervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleStop = () => {
    clearInterval(IntervalRef.current);
  };

  let SecondsPassed = 0;
  if (now != null && startInterval != null) {
    SecondsPassed = (now - startInterval) / 1000;
  }

  return (
    <main>
      <h2> Time passed: {SecondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart}> Start </button>
      <button onClick={handleStop}> Stop </button>
    </main>
  );
}

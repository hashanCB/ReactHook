"use client";
import React, { useState, useMemo } from "react";

function Usememo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("expensce");
    // Simulate an expensive calculation
    for (let i = 0; i < 1000000; i++) {}
    return count * 2;
  }, [count]); // Only re-calculate if `count` changes

  return (
    <div className=" flex flex-col max-w-[400px] space-y-3">
      <p>Count 1 with exp.Calculation: {count}</p>
      <p>Count 2 without exp.Calculation : {count2}</p>
      <p>Expensive calculation: {expensiveCalculation}</p>
      <button
        className=" bg-amber-900 rounded-md text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment Count call by exp.Calculation
      </button>
      <button
        className=" bg-amber-900 rounded-md text-white"
        onClick={() => setCount2(count2 + expensiveCalculation)}
      >
        Increment Count without exp.Calculation
      </button>
    </div>
  );
}
export default Usememo;

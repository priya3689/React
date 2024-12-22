import React, { useState } from "react";
import { useMemo } from "react";

function UseMemoComp() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const  slowFunctions = (num) => {
    console.log("running....");
    for (let i = 0; i < 1000000000; i++) {
        i=i++;
    }
    return num * 2;
  };
  const value = useMemo (()=>slowFunctions(count),[count]);

  return (
    <div>
      UseMemoComp<br/>
      <input
        type="text"
        placeholder="Count"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={()=>setCount(count+1)}>Set Count</button>
      <div>Input : {input}  <br/>Count : {count} <br/> Value : {value}</div>
    </div>
  );
}

export default UseMemoComp;

import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

function SuspenseComp() {

const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const  slowFunctions = (num) => {
    console.log("running....");
    for (let i = 0; i < 1000000000; i++) {
        i=i++;
    }
    return num * 2;
  };
  //const value = useMemo (()=>slowFunctions(count),[count]);

  return (
    <div>
      SuccessComp<br/>
      <input
        type="text"
        placeholder="Count"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={()=>setCount(count+1)}>Set Count</button>
       </div>
  );
}

export default SuspenseComp
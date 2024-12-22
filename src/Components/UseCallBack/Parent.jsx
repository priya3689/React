import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() {
    const [counter,setCounter] = useState(0);
    const [input,setInput] = useState("");

    const increment = useCallback(() =>{setCounter(counter+1) },[counter]) 

    console.log("Parent Component Rendered");

  return (<>
    <div>Parent</div>
   Count : {counter}<br/>
   <input type='text' value={input} placeholder='Hello' onChange={(e)=>setInput(e.target.value)}/>
   <Child increment={increment}/>
   </>
  )
}

export default Parent
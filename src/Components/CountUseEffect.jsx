import { useState,useEffect } from "react"


function CountUseEffect() {
    const[count,setCount]=useState(0);
    // useEffect(() => {
    //     console.log("Mounting..");((count)>0?count:0);
    //    return () => {console.log("Unmounting"+count)}

    //     },[count]);

    useEffect(() => {{count>0?count:setCount(0)}},[count]);
   
  
  return (
    <div>
         <button onClick={() => setCount(count+1)}>Add</button>
    <div>{count}</div>
    <button onClick={() => ((setCount(count-1))>0?count:setCount(0))}>Reduce</button>
    </div>
    
  )
}

export default CountUseEffect
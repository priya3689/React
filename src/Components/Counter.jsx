import { useState } from "react";

function Counter(){
   const [count, setCount] = useState(0)
   const handleChange =()=>{
    if(count>0){setCount(count+1);}
      else{setCount(0)}

   }
return <div>
   <h1>Counter</h1>
   <button onClick={() => handleChange()}>Add</button>
    <div>{count}</div>
    <button onClick={handleChange()}>Reduce</button>
    </div>
};

export default Counter;


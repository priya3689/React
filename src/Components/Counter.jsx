import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate()
  const handleChange = () => {
    if (count > 0) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => handleChange()}>Add</button>
      <div>{count}</div>
      <button onClick={() => handleChange()}>Reduce</button>
      <div className="cursor-pointer mt-10" onClick={()=>navigate("/")}>Back to Home</div>

    </div>
    
  );
}

export default Counter;

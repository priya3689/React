import { useEffect, useState } from "react";
import { createRoot  } from "react-dom/client";
import "./App.css";
import "./Components/Counter";
//import LoadData from "./Components/LoadData";
import CountUseEffect from "./Components/CountUseEffect";
import Todo from "./Components/Todo";

function App() {
  const [state, setState] = useState(false);
  const [activeComponent, setActiveComponent] = useState(0);
  useEffect(() => loadComponent());

  const loadComponent = () => {
    if (activeComponent == 1) {
      const domNode = document.getElementById("todo");
      const root = createRoot(domNode);
      root.render(<Todo />);
     } 
    
  };

  return (
    <div>
      <div>
        {<h3>My Components</h3>
        /* <nav>
          <div onClick={() => setActiveComponent(1)}>ToDo</div>
          <div onClick={() => setActiveComponent(0)}>Back to Home</div>
        </nav>
        <section> */}
          <div id="todo"><Todo/></div>
        
      </div>
     
    </div>
  );
}

export default App;

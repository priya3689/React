import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Components/Home";
import Counter from "../Components/Counter";
import Todo from "../Components/Todo";
import LoadData from "../Components/LoadData";
import Form from "../Components/Form/Form";
import User from "../Components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  
  },
  {
    path: "/counter",
    element: <Counter />,

    children:[
      {
        path:"/counterone",
        element:<div>sameer</div>
      }
    ]
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/loadData",
    element: <LoadData />,
  },
  {
    path: "/form/:id",
    element: <Form />,
  },
  { 
    path:"/user",
    element:<User/>
  }
]);

export default router;

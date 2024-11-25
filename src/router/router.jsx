import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Components/Home";
import Counter from "../Components/Counter";
import Todo from "../Components/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

export default router;

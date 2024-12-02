import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Components/Home";
import Counter from "../Components/Counter";
import Todo from "../Components/Todo";
import LoadData from "../Components/LoadData";
import Form from "../Components/Form/Form";

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
  {
    path: "/loadData",
    element: <LoadData />,
  },
  {
    path: "/form",
    element: <Form />,
  }
]);

export default router;

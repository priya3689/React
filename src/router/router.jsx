import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Components/Home";
import Counter from "../Components/Counter";
import Todo from "../Components/Todo";
import LoadData from "../Components/LoadData";
import Form from "../Components/Form/Form";
import User from "../Components/User/User";
import UseRefForm from "../Components/UseRefForm/UseRefForm";
import CustomHookComp from "../Components/CustomHookComp/CustomHookComp";
import UseMemoComp from "../Components/UseMemo/UseMemoComp";
import { Suspense } from "react";
import { lazy } from "react";
import Parent from "../Components/UseCallBack/Parent";
const SuspenseComp = lazy(() => import('../Components/Suspense/SuspenseComp'));

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
  },
  { 
    path:"/userRef",
    element:<UseRefForm/>
  },
  { 
    path:"/customHook",
    element:<CustomHookComp/>
  },
  { 
    path:"/useMemo",
    element:<UseMemoComp/>
  },
  { 
    path:"/suspense",
    element:<Suspense fallback={<p>Loading......................</p>}><SuspenseComp/></Suspense>
  },
  { 
    path:"/useCallBack",
    element:<Parent/>
  }
]);

export default router;

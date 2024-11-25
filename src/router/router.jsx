import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Components/Home";

const router = createBrowserRouter([{
    path: "/Home",
    element:<Home/>


}]);

export default router;
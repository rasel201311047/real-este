import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Homepage/Home";
import Login from "../Page/Loginpage/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
    },
  ]);
  export default router;
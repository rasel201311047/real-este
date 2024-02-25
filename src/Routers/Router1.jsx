import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Homepage/Home";
import Login from "../Page/Loginpage/Login";
import Typeofreg from "../Page/Loginpage/Typeofreg";
import Reg from "../Page/Loginpage/Reg";
import Viewallproperty from "../Page/Buypage/Viewallproperty";
import Aproperty from "../Page/Buypage/Aproperty";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
      children:[
        {
         

        }
      ]
    },
    {
      path:"/login",
      element:<Login></Login>,

    },
    {
      path:"/signup",
      element:<Typeofreg></Typeofreg>,

    },
    {
      path:"/signup/:type",
      element:<Reg></Reg>,

    },
    {
      path:"/proparty",
      element:<Viewallproperty></Viewallproperty>,

    },
    {
      path:"/proparty/:id",
      element:<Aproperty></Aproperty>,

    },
  ]);
  export default router;
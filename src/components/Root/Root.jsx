
import Anysas from "../Anysas/Anysas";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    
  },
  {
    path: "/solutions/anycaas",
    element: <Anysas/>,
  },
]);

const Root = () => {
    return (
        <>
            <Navbar/>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    );
};

export default Root;
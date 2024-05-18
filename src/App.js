import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Product from "./Components/Product/Product.jsx";
import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import React, { useEffect, useState } from "react";
import Company from "./Components/Company/Company.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Works from "./Components/Works/Works.jsx";
import Roots from "./Components/Roots/Roots.jsx";
import Services from "./Components/Services/Services.jsx";
import Loader from "./Components/Loader/Loader";

function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        {
          path: "Home",
          element: <Home></Home>,
        },
        {
          path: "Company",
          element: <Company></Company>,
        },
        {
          path: "Blog",
          element: <Blog></Blog>,
        },
        {
          path: "Works",
          element: <Works></Works>,
        },
        {
          path: "Roots",
          element: <Roots></Roots>,
        },
        {
          path: "Services",
          element: <Services></Services>,
        },
        {
          path: "Product",
          element: <Product></Product>,
        },
      ],
    },
  ]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const fake = () => {
      setInterval(() => {
        setIsloading(false);
      }, 4000);
    };
    fake();
  }, []);

  return isloading ? <Loader /> : <RouterProvider router={routes} />;
}

export default App;

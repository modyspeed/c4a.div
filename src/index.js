import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import JavaScript from "./pages/JavaScript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>sorry..................</h1>,
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: <h1>sorry..................</h1>,
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: <h1>sorry..................</h1>,
  },
  {
    path: "/javaScript",
    element: <JavaScript />,
    errorElement: <h1>sorry..................</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

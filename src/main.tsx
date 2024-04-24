import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Topo from "./views/Topo.tsx";
import "./App.css";
import Article from "./views/Article.tsx";

const router = createBrowserRouter([
  {
    path: "hackathon-franceinfo",
    element: <App />,
  },
  {
    path: "hackathon-franceinfo/topo",
    element: <Topo />,
  },
  {
    path: "hackathon-franceinfo/topo/article",
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

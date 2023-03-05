import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { action } from "./components/Forms/Login/loginAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action: action,
  },
  { path: "*", element: <Navigate to="/" /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

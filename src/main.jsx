import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { action } from "./components/Forms/Login/loginAction";
import { AboutPage } from "./pages/About";
import LoginPage from "./pages/Login";
import { ProductDetailPage } from "./pages/ProductDetail";
import { ProductsPage } from "./pages/Products";
import { RootLayout } from "./pages/Root";
import { SignupPage } from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/home", element: <App /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "products",
        element: <ProductsPage />,
        children: [{ path: ":id", element: <ProductDetailPage /> }],
      },
      { path: "login", element: <LoginPage />, action: action },
      { path: "signup", element: <SignupPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

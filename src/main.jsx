import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { action as loginAction } from "./components/Forms/Login/loginAction";
import { AboutPage } from "./pages/About";
import CollectionsPage from "./pages/Collections";
import LoginPage from "./pages/Login";
import { ProductDetailPage } from "./pages/ProductDetail";
import { ProductsPage } from "./pages/Products";
import { RootLayout } from "./pages/Root";
import { SignupPage } from "./pages/Signup";
import { action as signupAction } from "./components/Forms/SignUp/SignupAction";
import { action as productSelectionAction } from "./components/Forms/ProductSelection/ProductSelectionAction";
import CartPage from "./pages/Cart";
// import { HomePage } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { index: true, element: <HomePage /> },
      { path: "home", element: <App /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "collections",
        children: [
          { index: true, element: <CollectionsPage /> },
          {
            path: "products",
            children: [
              { index: true, element: <ProductsPage /> },
              {
                path: ":id",
                element: <ProductDetailPage />,
                action: productSelectionAction,
              },
            ],
          },
        ],
      },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "cart", element: <CartPage /> },
      { path: "signup", element: <SignupPage />, action: signupAction },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

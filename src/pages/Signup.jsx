import React from "react";
import SignUpForm from "../components/Forms/SignUp/SignUp";
import { TitleLayout } from "./Root";

export const SignupPage = () => {
  return (
    <div>
      <TitleLayout title={"Registrarse"} />
      <SignUpForm />
    </div>
  );
};

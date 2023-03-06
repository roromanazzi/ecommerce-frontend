import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import { PageTitle } from "../components/UI/PageTitle";

export const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export const TitleLayout = ({
  children,
  title,
  leftSubtitle,
  rightSubtitle,
  className,
}) => {
  return (
    <div className={className}>
      <PageTitle {...{ title, leftSubtitle, rightSubtitle }} />
      {children}
    </div>
  );
};

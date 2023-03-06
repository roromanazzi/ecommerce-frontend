import React from "react";
import Header from "../components/Header";
import { PageTitle } from "../components/UI/PageTitle";

export const RootLayout = ({
  children,
  title,
  leftSubtitle,
  rightSubtitle,
}) => {
  return (
    <div>
      <Header />
      {title && (
        <PageTitle
          title={title}
          leftSubtitle={leftSubtitle}
          rightSubtitle={rightSubtitle}
        />
      )}
      {children}
    </div>
  );
};

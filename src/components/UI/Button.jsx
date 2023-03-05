import React from "react";
import styles from "./Button.module.scss";

const classNames = {
  primary: "primary",
  secondary: "secondary",
};

const Button = ({ children, onClick, variant, type }) => {
  const className = classNames[variant];
  return (
    <button onClick={onClick} className={styles[className]} type={type}>
      {children}
    </button>
  );
};

export default Button;

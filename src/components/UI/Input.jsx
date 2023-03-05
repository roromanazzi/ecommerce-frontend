import React from "react";
import styles from "./Input.module.scss";

const classNames = {
  longInput: "long-input",
  shortInput: "short-input",
  rowInput: "row-input",
  noLabelInput: "no-label-input",
};

const Input = ({
  variant,
  label,
  type,
  onChange,
  placeholder,
  id,
  name,
  value,
}) => {
  const className = classNames[variant];

  return (
    <div className={`${styles[className]} ${styles.inputContainer}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        min={0}
      />
    </div>
  );
};

export default Input;

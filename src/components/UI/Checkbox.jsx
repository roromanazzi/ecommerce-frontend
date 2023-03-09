import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({
  label,
  placeholder,
  onSelect,
  id,
  name,
  checked,
  defaultChecked,
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        id={id}
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        placeholder={placeholder}
        onChange={onSelect}
        checked={checked}
      />
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;

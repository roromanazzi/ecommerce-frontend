import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, placeholder, onSelect, id, name, value }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        id={id}
        name={name}
        type="checkbox"
        placeholder={placeholder}
        onSelect={onSelect}
        value={value}
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

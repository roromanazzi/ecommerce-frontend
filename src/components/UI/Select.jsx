import React from "react";
import styles from "./Select.module.scss";

const Select = ({ data, name, title }) => {
  return (
    <div className={styles.container}>
      <legend className={styles.legend}>{title}</legend>
      <select name={name} className={styles.select}>
        {data.map((item) => {
          return (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

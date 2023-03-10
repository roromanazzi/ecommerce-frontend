import styles from "./Filter.module.scss";

import React from "react";

export const Filter = ({ title, data }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.options}>
        {data.map((item) => {
          return (
            <p key={item.id} className={styles.option}>
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

import React from "react";
import styles from "./Info.module.scss";

export const InfoText = ({ title, data }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.data}>{data}</h3>
    </div>
  );
};

import React from "react";
import styles from "./PageTitle.module.scss";

export const PageTitle = ({ title, leftSubtitle, rightSubtitle }) => {
  return (
    <div className={styles.titleContainer}>
      {leftSubtitle && <h3 className={styles.subtitle}>{leftSubtitle} </h3>}
      <h2>{title}</h2>
      {rightSubtitle && <h3 className={styles.subtitle}>{rightSubtitle}</h3>}
    </div>
  );
};

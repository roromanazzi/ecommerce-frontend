import React from "react";
import styles from "./Designer.module.scss";

const Designer = ({ name, personalInfo, text, imgSrc, social }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainData}>
        <img src={imgSrc} alt="" className={styles.img} />
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{name}</h2>
          <h3 className={styles.info}>{personalInfo}</h3>
          <p className={styles.text}>{social}</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Designer;

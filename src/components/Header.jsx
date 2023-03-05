import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import logo from "../img/JennyHaniver.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <svg className={styles.logo}></svg>
        <h2 className={styles.brandName}>Jenny Haniver</h2>
        <Link to={"/Login"} className={styles.link}>
          Login
        </Link>
      </div>
      <MainNavigation />
    </>
  );
};

export default Header;

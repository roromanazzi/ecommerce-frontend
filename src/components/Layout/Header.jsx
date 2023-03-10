import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import styles from "./Header.module.scss";
import logo from "../../img/JennyHaniver.svg";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <img
          className={styles.logo}
          style={{
            color: "white",
            filter: "invert(1)",
            width: "40px",
            marginLeft: "8px",
          }}
          src={logo}
        ></img>
        <h2 className={styles.brandName}>Jenny Haniver</h2>
        <Link to={"/login"} className={styles.link}>
          Login
        </Link>
        <Link to={"/signup"} className={styles.link}>
          Sign up
        </Link>
        <Link to={"/cart"} className={styles.link}>
          Cart
        </Link>
      </div>
      <MainNavigation />
    </>
  );
};

export default Header;

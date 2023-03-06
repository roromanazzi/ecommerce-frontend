import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.scss";

const MainNavigation = () => {
  return (
    <>
      <ul className={styles.navbarContainer}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Sobre nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Products"
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Sale"
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Sale
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MainNavigation;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.scss";

const MainNavigation = () => {
  return (
    <>
      <ul className={styles.navbarContainer}>
        <li>
          <NavLink
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Sobre nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
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

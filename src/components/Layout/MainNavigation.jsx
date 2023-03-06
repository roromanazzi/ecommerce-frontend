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
            to="/about"
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Sobre nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collections"
            className={({ isActive }) => {
              isActive ? styles.active : undefined;
            }}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sale"
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

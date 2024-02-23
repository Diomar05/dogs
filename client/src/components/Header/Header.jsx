import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerbuttons}>
        <button className={styles.button}>
          <NavLink to='/home' className={styles.link}>Home</NavLink>
        </button>
        <button className={styles.button}>
          <NavLink className={styles.link}>Create</NavLink>
        </button>
        <button className={styles.button}>
          <NavLink className={styles.link}>About</NavLink>
        </button>
      </div>
      <div className={styles.containerTitulo}>
        <NavLink to='/'><img src={logo} alt="" width="220px"/></NavLink>
      </div>

      <div className={styles.containersearch}>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;

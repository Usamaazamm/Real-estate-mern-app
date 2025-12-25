import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "../Styles/Header.module.css"
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.real}>Real-Estate</span>
        <div className = {styles.text}>
          <input type="text" placeholder="search..." />
          <span>
            <FaSearch></FaSearch>
          </span>
        </div>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/SignIN"}>SignIn</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

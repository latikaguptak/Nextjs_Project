'use client'

import { useContext, useState } from "react";
import styles from "./DarkModeToggle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { TheamContext } from "../../context/TheamContext";

const DarkModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };

const {toggle, mode} = useContext(TheamContext);

  return (
    <div
      className={styles.container} onClick={toggle}>
      <FontAwesomeIcon icon={faMoon} className={styles.icon} />
      <FontAwesomeIcon icon={faSun} className={styles.icon} />
      <div className={styles.ball}  style= {mode==='light' ? {left:"2px"}:{right:"2px"}} />
    </div>
  );
};

export default DarkModeToggle;

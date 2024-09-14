import { useState } from "react";
import styles from "./DarkModeToggle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };

    const mode= 'dark'
  return (
    <div
      className={styles.container}>
      <FontAwesomeIcon icon={faMoon} className={styles.icon} />
      <FontAwesomeIcon icon={faSun} className={styles.icon} />
      <div className={styles.ball}  style= {mode==='light' ? {left:"2px"}:{right:"2px"}}/>
    </div>
  );
};

export default DarkModeToggle;

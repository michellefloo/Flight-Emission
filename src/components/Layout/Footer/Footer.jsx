import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["left-section"]}>
        <img src={logo} alt="Logo" className={styles["logo"]} />
        <span className={styles["copyright"]}>© 2024 Injourney</span>
      </div>

      <div className={styles["right-section"]}>
        <span className={styles["title"]}>
          CARBON <strong>EMISSION</strong>
        </span>
        <span className={styles["subtitle"]}>CALCULATOR</span>
      </div>
      {/* <div className={styles.rightSection}>
        <p className={styles.text}>Carbon Emission Calculator</p>
      </div> */}
    </footer>
  );
};

export default Footer;

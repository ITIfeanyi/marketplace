import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const EmptyFooter = () => {
  return (
    <footer className={styles.emptyFooter}>
      <div className={styles.emptyFooter_footer2_section}>
        <small>Terms & condition</small>
        <small>Privacy Policy</small>
        <small> Cookie Policy</small>
      </div>
      <div className={styles.emptyFooter_footer3_section}>
        <small>
          &copy; 2020 All right reserved, made with{" "}
          <span className={styles.heart}>
            {" "}
            <FontAwesomeIcon icon={faHeart} />
          </span>{" "}
          by
          <strong>
            {" "}
            <Link to='https://twitter.com/ifeanyiigweh'> Ifeanyi</Link>{" "}
          </strong>
        </small>
      </div>
    </footer>
  );
};

export default EmptyFooter;

import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const EmptyHeader = () => {
  return (
    <>
      <div className={styles.header__nav}>
        <div className={styles.empty_header_logo}>
          <Link to='/'>
            <h3>Market Place</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyHeader;

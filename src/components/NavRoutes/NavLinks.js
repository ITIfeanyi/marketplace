import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import facebook from "../../icon/facebook .png";
import instagram from "../../icon/instagram.png";
import twitter from "../../icon/twitter.png";

const NavLinks = () => {
  const [navOpen, setNavOpen] = useState(false);
  let menu;
  if (navOpen) {
    menu = (
      <nav className={styles.menu_container}>
        <div
          className={styles.closeBtn_container}
          onClick={() => setNavOpen(false)}
        >
          <FontAwesomeIcon className={styles.closeBtn} icon={faTimes} />
        </div>
        <ul className={styles.menu}>
          <li onClick={() => setNavOpen(false)}>
            <Link className={styles.links} to='/'>
              Home
            </Link>{" "}
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link className={styles.links} to='/'>
              Products
            </Link>{" "}
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link className={styles.links} to='/collections'>
              Collections
            </Link>{" "}
          </li>
          <li onClick={() => setNavOpen(false)}>
            <Link className={styles.links} to='/contact'>
              Contact
            </Link>{" "}
          </li>
        </ul>
        <div className={styles.social}>
          <img src={facebook} alt='facebook' />
          <img src={instagram} alt='instagram' />
          <img src={twitter} alt='twitter' />
        </div>
      </nav>
    );
  }

  return (
    <>
      <div>
        <div
          className={styles.faBars_container}
          onClick={() => setNavOpen(true)}
        >
          <FontAwesomeIcon className={styles.faBars} icon={faBars} />
        </div>
        {menu}
      </div>
    </>
  );
};

export default NavLinks;

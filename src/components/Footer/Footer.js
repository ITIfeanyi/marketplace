import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerTitle1, setFooterTitle1] = useState(false);
  const [footerTitle2, setFooterTitle2] = useState(false);

  const handleFooterTitle1 = () => {
    setFooterTitle1(!footerTitle1);
  };
  const handleFooterTitle2 = () => {
    setFooterTitle2(!footerTitle2);
  };
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.footer_subcontainer}>
          <h3>Market Place</h3>
          <div className={styles.cartegory}>
            <div className={styles.company}>
              <div className={styles.footer_title} onClick={handleFooterTitle1}>
                <span>
                  <h4>Company </h4>
                </span>
                <span>
                  {footerTitle1 ? (
                    <FontAwesomeIcon icon={faAngleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleUp} />
                  )}{" "}
                </span>
              </div>
              {footerTitle1 && (
                <ul className={styles.footer_title_list}>
                  <li>
                    {" "}
                    <Link to='/about'> About</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to='/contact-us'> Contact us</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to='/license'>Our license </Link>{" "}
                  </li>
                </ul>
              )}
            </div>
            <div className={styles.company}>
              <div className={styles.footer_title} onClick={handleFooterTitle2}>
                <h4>Help </h4>
                <span>
                  {footerTitle2 ? (
                    <FontAwesomeIcon icon={faAngleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleUp} />
                  )}{" "}
                </span>
              </div>

              {footerTitle2 && (
                <ul className={styles.footer_title_list}>
                  <li>
                    {" "}
                    <Link to='/faq'> FAQs</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to='/support'>Support</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to='/customer-service'>Customer service </Link>{" "}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className={styles.socialmedia}></div>
      </div>
      <div className={styles.footer2_section}>
        <small>Terms & condition </small>
        <small>Privacy </small>
        <small> Cookie Policy </small>
      </div>
      <div className={styles.footer3_section}>
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

export default Footer;

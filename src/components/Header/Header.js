import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";
import styles from "./Header.module.css";
import NavLinks from "../NavRoutes/NavLinks";
import SignInSignUp from "../SignInSignUp/SignInSignUp";
import cartLogo from "../../icon/cartColor.png";
import { UserContext } from "../UserContext";
import Logout from "../Logout/Logout";

const Header = () => {
  const { cartItems } = useContext(ProductContext);
  const { hasAccount, user } = useContext(UserContext);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header__nav}>
          <div className={styles.header_container}>
            <div className={styles.nav_links}>
              {" "}
              <NavLinks />
            </div>
            <div className={styles.header_logo}>Market Place</div>

            <div className={styles.cart}>
              {
                <Link to='/cart' className={styles.cart_link}>
                  {" "}
                  <img src={cartLogo} alt='cart' />
                  <span className={styles.cart_length}>{cartItems.length}</span>
                </Link>
              }
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.search}>
              <input
                type='search'
                placeholder='Search Market Place'
                className={styles.searchTerm}
              />

              <button className={styles.searchButton} type='submit'>
                {" "}
                <FontAwesomeIcon
                  icon={faSearch}
                  className={styles.search_icon}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {hasAccount ? (
        <div className={styles.userConfirmed}>Hello, {user.email} </div>
      ) : (
        <SignInSignUp />
      )}
    </>
  );
};

export default Header;

import React from "react";
import styles from "./SignInSignUp.module.css";
import { Link } from "react-router-dom";
import EmptyHeader from "../Header/EmptyHeader";
import EmptyFooter from "../Footer/EmptyFooter";

const SignUp = () => {
  return (
    <div>
      <div className={styles.signIn_container}>
        <EmptyHeader />
        <div className={styles.signIn_subcontainer}>
          <h3 className={styles.welcome_msg}>Welcome </h3>
          <h3>
            {" "}
            <Link className={styles.link} to='/sign-in'>
              Sign In
            </Link>
          </h3>
        </div>
        <form>
          <div className={styles.form_container}>
            <div className={styles.form_name}>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' placeholder='Ifeanyi Igweh' />
            </div>
            <div className={styles.form_email}>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                name='email'
                placeholder='ifeanyiigweh200@gmail.com'
              />
            </div>
            <div className={styles.form_password}>
              <label htmlFor='password'>Password:</label>
              <input type='password' name='password' />
              <p className={styles.accept}>
                By clicking on submit, you accept the term of condition of
                MarketPlace.{" "}
                <Link className={styles.link} to='/#'>
                  Learn more
                </Link>
              </p>
            </div>
            <div className={styles.form_btn_container}>
              <button className={styles.form_btn} type='submit'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <EmptyFooter />
    </div>
  );
};

export default SignUp;

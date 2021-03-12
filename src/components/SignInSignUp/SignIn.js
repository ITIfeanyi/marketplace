import React, { useContext } from "react";
import styles from "./SignInSignUp.module.css";
import { Link, Redirect } from "react-router-dom";
import EmptyHeader from "../Header/EmptyHeader";
import EmptyFooter from "../Footer/EmptyFooter";
import { UserContext } from "../UserContext";

const SignIn = () => {
  const {
    handleUserLogin,
    handleLogin,
    emailError,
    passwordError,
    user,
  } = useContext(UserContext);

  return (
    <>
      {user ? (
        <Redirect to='/' />
      ) : (
        <div>
          <div className={styles.signIn_container}>
            <EmptyHeader />
            <div className={styles.signIn_subcontainer}>
              <h3 className={styles.welcome_msg}>Welcome </h3>
              <h3>
                {" "}
                <Link className={styles.link} to='/sign-up'>
                  go to Sign Up?
                </Link>
              </h3>
            </div>

            <form onSubmit={handleLogin}>
              <div className={styles.form_container}>
                <h2>Sign In</h2>
                <div className={styles.form_email}>
                  <label htmlFor=''>Email</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='ifeanyiigweh200@gmail.com'
                    onChange={handleUserLogin}
                    autoFocus
                  />
                  <p className={styles.error_msg}> {emailError}</p>
                </div>
                <div className={styles.form_password}>
                  <label htmlFor='password'>Password:</label>
                  <input
                    type='password'
                    name='password'
                    onChange={handleUserLogin}
                  />
                  <p className={styles.error_msg}> {passwordError}</p>

                  <p className={styles.accept}>
                    By clicking on submit, you accept the term of condition of
                    MarketPlace.{" "}
                    <Link className={styles.link} to='/#'>
                      Learn more
                    </Link>
                  </p>
                </div>
                <div className={styles.form_btn_container}>
                  <button
                    onClick={handleLogin}
                    className={styles.form_btn}
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;

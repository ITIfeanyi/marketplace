import React from "react";
import styles from "./SignInSignUp.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={styles.signIn__signUp__container}>
      <h4>Sign In for a better experience</h4>
      <div className={styles.signIn__signUp}>
        <Link to='/sign-in'>
          <button>Sign In </button>
        </Link>

        <Link to='/sign-up'>
          <button>Sign Up </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

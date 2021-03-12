import React, { createContext, useState, useEffect } from "react";
import fire from "../FireBase";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [newRegister, setNewRegister] = useState({ email: "", password: "" });
  const [user, setUser] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUserLogin = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const handleUserRegister = (e) => {
    setNewRegister({ ...newRegister, [e.target.name]: e.target.value });
  };
  const clearInput = () => {
    setUserLogin({ email: "", password: "" });
    setNewRegister({ email: "", password: "" });
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(userLogin.email, userLogin.password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalide-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(newRegister.email, newRegister.password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
        setHasAccount(true);
      } else {
        setUser("");
      }
    });
  };
  const handleLogOut = () => {
    fire.auth().signOut();
    setHasAccount(false);
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        setUserLogin,
        newRegister,
        setNewRegister,
        user,
        setUser,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        handleLogin,
        handleLogOut,
        handleRegister,
        hasAccount,
        handleUserLogin,
        handleUserRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

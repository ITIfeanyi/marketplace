import React, { useContext } from "react";
import styles from "./Logout.module.css";
import { UserContext } from "../UserContext";

const Logout = () => {
  const { handleLogOut } = useContext(UserContext);
  return (
    <div className={styles.logout}>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Logout;

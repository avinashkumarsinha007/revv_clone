import React from "react";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory();


  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__Logo}>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"
          alt="logo"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/")}
        />
        <p className={styles.Navbar__Logo__Text}>Sanitised. Safe</p>
      </div>
      <div></div>
      <div className={styles.Navbar__Button__Cars}>
        <button>
          <b>Hyundai</b> Subscription
        </button>
        <button>
          <b>Mahindra</b> Subscription
        </button>
      </div>
      <div className={styles.Navbar__Button__Info}>
        <button>Cars Subscription</button>
        <button>How it works</button>
        <button>FAQs</button>
        <button>Login or Signup</button>
        
      </div>
    </div>
  );
}

export default Navbar;

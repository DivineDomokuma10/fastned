import React from "react";
import styles from "./login.module.css";
import { FaRegEye, FaUser } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  return (
    <main className={styles.container}>
      <form className={styles.formStyle}>
        <h1 className={styles.formHeader}>Welcome Back!</h1>

        <aside className={styles.inptsContainer}>
          <div className={styles.inptErrContainer}>
            <div className={styles.inptDiv}>
              <input type="email" placeholder="Email" className={styles.inpt} />

              <div className={styles.iconContainer}>
                <FaUser className={styles.icon} />
              </div>
            </div>

            <p className={styles.err}></p>
          </div>

          <div className={styles.inptErrContainer}>
            <div className={styles.inptDiv}>
              <input
                type="password"
                placeholder="Password"
                className={styles.inpt}
              />

              <div className={styles.iconContainer}>
                <FaRegEye className={styles.icon} />
              </div>
            </div>

            <p className={styles.err}></p>
          </div>
        </aside>

        <div className={styles.submitBtnContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>

          <p>
            Dont have an account?{" "}
            <Link className={styles.linkText} href="/sign-up">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Login;

import React from "react";
import styles from "../login/login.module.css";
import { FaRegEye, FaUser } from "react-icons/fa";
import Link from "next/link";

const SignUp = () => {
  return (
    <main className={styles.container}>
      <form className={styles.formStyle}>
        <h1 className={styles.formHeader}>Create an Account</h1>

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

          <div className={styles.inptErrContainer}>
            <div className={styles.inptDiv}>
              <input
                type="password"
                placeholder="Confirm Password"
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
            Click here to{" "}
            <Link className={styles.linkText} href="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignUp;

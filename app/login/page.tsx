import React from "react";
import styles from "./login.module.css";
import { FaRegEye } from "react-icons/fa";

const Login = () => {
  return (
    <main className={styles.container}>
      <form action="">
        <header>Login</header>

        <aside>
          <div>
            <label htmlFor="">Username</label>
            <div>
              <input type="text" placeholder="John Smith" />
            </div>
          </div>

          <div>
            <label htmlFor="">Username</label>
            <div>
              <input type="text" placeholder="John Smith" />
              <FaRegEye className={styles.eyeIcon} />
            </div>
          </div>
        </aside>
      </form>
    </main>
  );
};

export default Login;

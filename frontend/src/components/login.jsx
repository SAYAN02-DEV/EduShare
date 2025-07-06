import styles from './login.module.css'
import React from 'react';

function Login() {
  return (
    <div className={styles.loginParent}>
      <div className={styles.groupParent}>
        <h1 className={styles.login}>Login</h1>

        <label className={styles.label}>Username</label>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Enter Username" className={styles.input} />
        </div>

        <label className={styles.label}>Password</label>
        <div className={styles.inputContainer}>
          <input type="password" placeholder="Enter Password" className={styles.input} />
        </div>

        <button className={styles.loginButton}>Login</button>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import styles from './register.module.css';

function Register() {
  return (
    <div className={styles.registerParent}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>Register</h1>

        <label className={styles.label}>Name</label>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Enter Name" className={styles.input} />
        </div>

        <label className={styles.label}>Email</label>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="Enter Email" className={styles.input} />
        </div>

        <label className={styles.label}>Password</label>
        <div className={styles.inputContainer}>
          <input type="password" placeholder="Enter Password" className={styles.input} />
        </div>

        <label className={styles.label}>Confirm Password</label>
        <div className={styles.inputContainer}>
          <input type="password" placeholder="Confirm Password" className={styles.input} />
        </div>

        <button className={styles.registerButton}>Register</button>
      </div>
    </div>
  );
}

export default Register;

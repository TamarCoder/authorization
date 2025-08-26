import React from "react";
import styles from "./Register.module.css";

interface RegisterProps {
  onBackToLogin: () => void;
}

export default function Register({ onBackToLogin }: RegisterProps) {
  return (
    <form className={styles.registerForm}>
      <div className={styles.formContainer}>
        <label htmlFor="username" className={styles.label}>Username</label>
        <input type="text" name="username" placeholder="Enter your username" className={styles.input} />
      </div>

      <div className={styles.formContainer}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" name="email" placeholder="Enter your email" className={styles.input} />
      </div>

      <div className={styles.formContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input type="password" name="password" placeholder="Enter your password" className={styles.input} />
      </div>

      <button type="submit" className={styles.registerButton}>Sign Up</button>

      <a
        href="#"
        className={styles.link}
        onClick={(e) => {
          e.preventDefault();
          onBackToLogin(); // დააბრუნე ლოგინის გვერდზე
        }}
      >
        Already have an account? <span>Log In</span>
      </a>
    </form>
  );
}
import { useState } from "react";
import styles from "./App.module.css";
 
import Buttons from "../Buttons/Buttons";
import Register from "../Registration/Register";

export default function App() {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  return (
    <div className={styles.container}>
      <div
        className={`${styles.leftPane} ${
          authMode === "register" ? styles.moved : ""
        }`}
      >
        <div className={styles.leftContent}>
          <h1>Create Your Account</h1>
          <span>Share your artwork and get projects</span>
        </div>
      </div>

      <section className={styles.rightPanel}>
        <div className={styles.mainTitile}>
          <h1>{authMode === "login" ? "Sign In" : "Sign Up"}</h1>
        </div>

        {authMode === "register" ? (
          <Register onBackToLogin={() => setAuthMode("login")} />
        ) : (
          <form className={styles.logIn}>
            <div className={styles.formContainer}>
              <label htmlFor="email" className={styles.lable}>
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>
            <div className={styles.formContainer}>
              <label htmlFor="password" className={styles.lable}>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className={styles.input}
              />
            </div>

            <Buttons />

            <a
              href="#"
              className={styles.link}
              onClick={(e) => {
                e.preventDefault();
                setAuthMode("register");
              }}
            >
              If you don't have an account, <span>Sign Up</span>
            </a>
          </form>
        )}
      </section>
    </div>
  );
}
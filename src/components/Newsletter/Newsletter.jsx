import styles from "./Newsletter.module.css";
import { useState } from "react";
import error_icon from "../../assets/images/icon-error.svg";
import success_icon from "../../assets/images/icon-success.svg";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setEmail(e.target.value);
    setError(false);
    setSuccess(false);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(email));
  }

  function submit(e) {
    e.preventDefault();
    if (isValid && email) {
      setSuccess(true);
    } else {
      setError(true);
    }
    // console.log("success");
    // setTimeout(() => {
    //   console.log("cleard");
    // }, 5000);
  }

  return (
    <div>
      <h1 className="title">Newsletter</h1>
      <div className="description">
        <p>
          Want to stay updated on my latest articles, coding tutorials, and
          personal adventures? Sign up for my newsletter! It's a simple way to
          keep track of new posts and occasional coding tips I discover. Just
          drop your email in the sign-up box, and I'll send you updates whenever
          there's something new to share.
        </p>
        <p className="invite">
          <b>
            I'd love to have you along for the ride and also hear about your own
            journey!
          </b>
        </p>
        <form onSubmit={submit}>
          <label for="email">Email Address</label>
          <input
            name="email"
            type="text"
            placeholder="example@email.com"
            value={email}
            onChange={handleChange}
            className={`${success ? styles.green : ""} ${
              error ? styles.red : ""
            }`}
          />
          {success && (
            <p className={`${styles.success} ${styles.message}`}>
              <img src={success_icon} />
              You're suscribed! Check your inbox for updates.
            </p>
          )}
          {error && (
            <p className={`${styles.error} ${styles.message}`}>
              <img src={error_icon} /> Please enter a valid email address.
            </p>
          )}
          <button className={styles.suscribe}>Stay Updated</button>
          <p>Unsubscribe anytime. No spam, I promise 🙂</p>
        </form>
      </div>
    </div>
  );
}

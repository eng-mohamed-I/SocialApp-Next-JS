import styles from "./contactus.module.css";

const contactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <p className={styles.p}>
        If you have any questions or concerns, feel free to reach out to us!
      </p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">
            Message:
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contactUs;

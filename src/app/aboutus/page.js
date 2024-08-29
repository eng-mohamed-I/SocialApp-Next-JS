import styles from "./aboutus.module.css";
const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>About Us</h1>
      <p className={styles.p}>
        Welcome to Your Company Name! We are dedicated to providing the best
        products and services to our customers. Our mission is to deliver
        high-quality solutions that meet the needs of our diverse clientele.
      </p>
      <p className={styles.p}>
        Our team is composed of passionate professionals who are experts in
        their fields. We believe in innovation, integrity, and customer
        satisfaction as the core values that drive our business.
      </p>
      <p className={styles.p}>
        Since our founding, we have grown significantly, expanding our offerings
        and improving our services continuously. We are proud of our journey so
        far and excited about the future. Thank you for choosing us as your
        trusted partner.
      </p>
    </div>
  );
};
export default AboutUs;

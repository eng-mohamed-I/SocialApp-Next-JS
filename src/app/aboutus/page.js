import styles from "./aboutus.module.css";
const AboutUs = () => {
  return (
    <div className={`${styles.container} col-12`}>
      <h1 className={styles.h1}>About Us</h1>
      <p className={styles.p}>
        Welcome to Gaza, your gateway to meaningful connections and seamless
        communication. Our app is designed to bring people closer, offering a
        dynamic platform where you can send messages, share moments, and explore
        a wide range of features tailored to enhance your social experience.
      </p>
      <p className={styles.p}>
        At Gaza, we believe in the power of communication to foster community
        and build lasting relationships. Whether you're connecting with old
        friends or meeting new ones, our app provides the tools you need to stay
        engaged and informed.
      </p>
      <p className={styles.p}>
        Join us on Gaza and discover a world of possibilities where your voice
        can be heard, your ideas can be shared, and your connections can grow
        stronger.
      </p>
    </div>
  );
};
export default AboutUs;

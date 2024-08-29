import styles from "./sidebar.module.css";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdMore } from "react-icons/md";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}></div>
      <Link href={"/"} className={`${styles.li} ${styles.link}`}>
        <span>
          <FaHouse />
        </span>
        &nbsp; Home
      </Link>
      <Link href={"/posts"} className={`${styles.li} ${styles.link}`}>
        <FaSearch /> &nbsp; Explore
      </Link>
      <li className={styles.li}>
        {" "}
        <FaBell />
        &nbsp; Notifications
      </li>
      <li className={styles.li}>
        <FaMessage />
        &nbsp; Messages
      </li>
      <Link className={`${styles.li} ${styles.link}`} href={"/blog"}>
        {" "}
        <FaUser /> &nbsp; MyBlogs
      </Link>
      <li className={styles.li}>
        {" "}
        <MdMore />
        &nbsp; More
      </li>
    </div>
  );
};

export default Sidebar;

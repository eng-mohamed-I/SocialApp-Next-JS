import dbConnect from "../../../lib/mogodb";
import styles from "./blog.module.css";
import { dbBlogs } from "../../../data/db";
import Link from "next/link";

export const metadata = {
  title: "Blogs | Gaza",
  description: "Posts Page",
};

// ##SSR Server Side Rendering(render in client side -render every time i fetch)
export const fetchCache = "force-no-store";

const Blog = async () => {
  // Blogs array
  let blogs = [];

  // Database connection
  const dbConnected = await dbConnect;

  // Database
  const db = dbConnected.db();

  // Find Blogs Collection
  blogs = await db.collection("blogs").find({}).toArray();

  // Check On Blogs Collection... fill it
  if (blogs.length == 0) {
    console.log("blogs in fill mode...");
    await db.collection("blogs").insertMany(dbBlogs);
    blogs = await db.collection("blogs").find({}).toArray();
  } else {
    console.log("blogs is ready to use now");
  }

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button class={styles.addbutton}>
          <Link className={styles.link} href={"/blog/addblog"}>
            Add Blog
          </Link>
        </button>
      </div>
      <div className={styles.posts}>
        {blogs.reverse().map((blog) => (
          <div key={blog.id} className={styles.post}>
            <div>{blog.new == true ? "new" : ""}</div>
            <h2 className={styles.h2}>{blog.title}</h2>
            <p className={styles.p}>{blog.body}</p>
            <a href="" className={styles.readMore}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

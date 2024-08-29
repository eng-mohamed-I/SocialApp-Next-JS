import Link from "next/link";
import styles from "./post.module.css";
import dbConnect from "../../../lib/mogodb";
import { dbPosts } from "../../../data/db";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

export const metadata = {
  title: "Posts | Gaza",
  description: "Posts Page",
};

// ##ISR => Icremantal Static Regeneration (update posts [every 3 sec])##
export const revalidate = 3;

const Posts = async () => {
  let posts = [];

  // Data Base Connection
  const dbConnected = await dbConnect;

  // Database
  const db = dbConnected.db();

  // OLDWAY
  // Collection in Database

  //check about data and fill it
  posts = await db.collection("posts").find({}).toArray();

  // fill posts in your in database
  if (posts.length == 0) {
    console.log(posts.length);
    console.log("posts fill...");
    await db.collection("posts").insertMany(dbPosts);
    //OLDWAY
    // posts = await db.collection("posts").find({}).toArray(); //get data after fill
    console.log("Completed, Posts is Ready to use");
  } else {
    console.log("Posts Ready to use", posts.length);
  }

  // End Point For Posts
  posts = await fetch("http://localhost:3000/api/posts");
  posts = await posts.json();

  // Loading
  const timePromise = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  return (
    <div className={styles.container}>
      <button class={styles.addbutton}>
        <Link className={styles.link} href={"/posts/addpost"}>
          Add Post
        </Link>
      </button>

      <div className={styles.main}>
        {posts.map((post) => (
          <div className={styles.card} key={post.id}>
            {" "}
            <div>{post.title}</div>
            <h4>content</h4>
            <div>{post.body}</div>
            <Link href={`/posts/${post.id}`}>show more</Link>
            <div className={styles.events}>
              <div>
                <BiLike />
              </div>
              <div>
                <FaRegComment />
              </div>
              <div>
                <FaRegShareSquare />
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

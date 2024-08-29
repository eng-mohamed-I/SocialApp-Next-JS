import Link from "next/link";
import styles from "./post.module.css";

// export const fetchCeche
const Post = async ({ params }) => {
  //Get Single Post
  let post;
  const response = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  post = await response.json();
  post = post[0];

  // Get Posts
  let posts = await fetch("http://localhost:3000/api/posts");
  posts = await posts.json();
  let postsLength = posts.length;

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Post Details</h2>
      <h4 className={styles.h4}>{post.title}</h4>
      <p className={styles.p}> {post.body} </p>

      <div className={styles.linkes}>
        <Link
          className={styles.prev}
          href={`/posts/${
            +params.id - 1 == 0 ? (params.id = 1) : +params.id - 1
          }`}
        >
          Previous
        </Link>
        <Link className={styles.bth} href="/posts">
          Back to posts
        </Link>
        <Link
          className={styles.next}
          href={`/posts/${
            +params.id == postsLength
              ? (params.id = postsLength)
              : +params.id + 1
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Post;

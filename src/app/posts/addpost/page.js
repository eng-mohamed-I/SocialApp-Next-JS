"use client";
import styles from "./addpost.module.css";
import { useState } from "react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!body.trim()) {
      newErrors.body = "Body is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({}); //send data
      setTitle("");
      setBody("");
    }
  };

  const onSubmited = async () => {
    try {
      let posts = await fetch("http://localhost:3000/api/posts");
      posts = await posts.json();
      let postsLength = posts.length;
      console.log(postsLength);
      const formData = {
        id: posts[postsLength - 1].id + 1,
        userId: 1,
        title: title,
        body: body,
      };
      let res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${styles.input} ${
              errors.title ? styles.errorInput : ""
            }`}
            placeholder="Enter post title"
          />
          {errors.title && (
            <span className={styles.errorMessage}>{errors.title}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="body" className={styles.label}>
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className={`${styles.input} ${styles.textarea} ${
              errors.body ? styles.errorInput : ""
            }`}
            placeholder="Enter post body"
          />
          {errors.body && (
            <span className={styles.errorMessage}>{errors.body}</span>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Post
        </button>
      </form>
    </div>
  );
}

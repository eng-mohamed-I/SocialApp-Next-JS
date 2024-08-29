import { redirect } from "next/dist/server/api-utils";
import dbConnect from "../../../../lib/mogodb";
import styles from "./addblog.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Add Blog : Blogs | Gaza",
  description: "Posts Page",
};

const AddBlog = () => {
  const uploadBlog = async (formData) => {
    "use server";

    let dbConnection = await dbConnect;
    let db = dbConnection.db();
    let blogs = await db.collection("blogs").find({}).toArray();
    let title = formData.get("title");
    let body = formData.get("body");

    let blog = {
      new: true,
      title: title,
      body: body,
      userId: 1,
      id: +blogs[blogs.length - 1].id + 1,
    };

    if (title != "" || body != "") {
      console.log(typeof blog.id);
      // await db.collection("blogs").insertOne({ ...blog });
      console.log(formData);
    }
  };

  return (
    <div className={`${styles.container} container bg-dark text-light p-4`}>
      <form action={uploadBlog}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control bg-secondary text-light"
            placeholder="Enter Blog title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            className="form-control bg-secondary text-light"
            placeholder="Enter Blog body"
            rows="5"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Post
        </button>
      </form>
    </div>
  );
};

export default AddBlog;

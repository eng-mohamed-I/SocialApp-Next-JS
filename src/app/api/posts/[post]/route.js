import dbConnect from "../../../../../lib/mogodb";

export async function GET(request, { params }) {
  const postId = +params.post; //return number of page :)
  const api = await dbConnect;
  const db = api.db();
  console.log(postId);
  let post = await db.collection("posts").find({ id: postId }).toArray();
  return new Response(JSON.stringify(post));
}

import dbConnect from "../../../../lib/mogodb";
//end ponit to get posts
export async function GET() {
  const api = await dbConnect;
  const db = api.db();
  let posts = await db.collection("posts").find({}).toArray();
  let dataResponse = JSON.stringify(posts);

  return new Response(dataResponse);
}

export async function POST(request) {
  const api = await dbConnect;
  const db = api.db();
  let reqData = await request.json();
  await db.collection("posts").insertOne(reqData); // send data in like json
  return new Response({ message: "post is uploaded successfully" });
}

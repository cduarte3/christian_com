import clientPromise from "../../lib/mongodb";

const dbSchema = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("feedback");

    const reviews = await db.collection("reviews").find({}).toArray();
    res.json(reviews);
  } catch (e) {
    console.error(e);
  }
};

export default dbSchema;

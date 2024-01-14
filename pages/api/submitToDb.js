import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { reviewText, rating } = req.body;

  if (!reviewText || !rating || reviewText === "") {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const uri = process.env.MONGODB_URI;
    const options = {};
    const client = new MongoClient(uri, options);
    await client.connect();

    const db = client.db('feedback');
    const collection = db.collection('reviews');

    const result = await collection.insertOne({
      review: reviewText,
      rating: parseInt(rating),
      date: new Date(),
    });

    client.close();

    res.status(200).json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
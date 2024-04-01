import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }
    // Store it in DB
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://samehabdelhaleem95:YuSblJrvxIQiUuqU@cluster0.5ngd1qg.mongodb.net/my-blog?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }
    const db = client.db();
    let result;
    try {
      result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing message failed!" });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: "Success stored message", message: newMessage });
  }
}

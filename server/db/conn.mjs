import { MongoClient } from "mongodb";

//const connectionString = process.env.ATLAS_URI || "";
const connectionString = "mongodb+srv://amnamunawarawan:w3kXMbVCdgHYMCvx@cluster0.daivfsy.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("capstoneone");

export default db;
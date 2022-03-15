const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

// Replace the following with your Atlas connection string
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@bookstore-library.pqsap.mongodb.net/bookstore-data?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const dbName = "test";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    // const db = client.db(dbName);

    // // use collection "people"
    // const col = db.collection("people");

    // //construct a document
    // let personDocument = {
    //   name: { first: "mark", last: "rose" },
    //   job: "web developer",
    // };

    // // insert a single documen, wait for promise so we can read it back
    // const p = await col.insertOne(personDocument);

    // // find one document
    // const myDoc = await col.findOne();

    // // print to console
    // console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

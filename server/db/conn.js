import { MongoClient } from "mongodb";

const Db = process.env.ATLAS_URI || "not using the .env file";

//creating a new client to manage the connection to the database
export const client = new MongoClient(Db, {
  //options to control the connection
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//object that contains the function that connects to the MongoDb database, and the function that disconnects
const dbo = {
  connectToServer: async () => {
    try {
      console.log("connecting to client");
      await client.connect();
    } catch (e) {
      console.log(e);
    }
  },
};

export default dbo;

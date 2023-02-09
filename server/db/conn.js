import { MongoClient } from "mongodb";

const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

let _db;

const dbo = {
connectToServer: callback => {
client.connect(function (err, db) {
if (db) {
_db = db.db("canele");
} else {
    console.log("no db");

}
return callback(err);
});
},
getDb: () => {
return _db;
},
};

export default dbo
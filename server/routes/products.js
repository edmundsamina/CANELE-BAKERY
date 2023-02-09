import express from "express";
// This will help us connect to the database
import dbo from "../db/conn.js";

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const productsRouter = express.Router();

// This section will help you get a list of all the records.
productsRouter.route("/").get(function (req, res) {
  let db_connect = dbo.getDb('canele');
  console.log(db_connect)
  db_connect
    .collection("products").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

export default productsRouter;

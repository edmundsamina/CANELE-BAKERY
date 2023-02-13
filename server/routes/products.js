import express from "express";
import { getAllListings, getAllCakeListings, getAllPastryListings, getAllBreadListings } from "../models/models.js";
// The router will be added as a middleware and will take control of requests starting with path /record.
const productsRouter = express.Router();

import { client } from "../db/conn.js";
// This section will help you get a list of all the records.

productsRouter.route("/products").get(async function (req, res) {
  const result = await getAllListings(client)
  res.status(200).json({ success: true, payload: result });
});

productsRouter.route("/products/bread").get(async function (req, res) {
  const result = await getAllBreadListings(client)
  res.status(200).json({ success: true, payload: result });
});

productsRouter.route("/products/pastry").get(async function (req, res) {
  const result = await getAllPastryListings(client)
  res.status(200).json({ success: true, payload: result });
});

productsRouter.route("/products/cake").get(async function (req, res) {
  const result = await getAllCakeListings(client)
  res.status(200).json({ success: true, payload: result });
});


export default productsRouter;

import express from 'express';
import cors from 'cors';
import productsRouter from "./routes/products.js";
//importing the connection from conn.js file
// import dbo from "./db/conn.js";

const app = express();
const port = process.env.PORT || 5000;

//cors errors fixer
app.use(cors());

// middleware that parses incoming request bodies in JSON format and makes the resulting data available in the req.body object of the request object. Maybe obselete because MONGOdb deals with BSON and has a toArray method?
app.use(express.json());

//directs all requests to the router
app.use(productsRouter);

//runs the server, wakes up nodemon
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
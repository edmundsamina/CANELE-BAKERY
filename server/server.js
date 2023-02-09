import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'
import productsRouter from "./routes/products.js";
import dbo from "./db/conn.js";
dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(productsRouter);

const dbConnection = dbo;

app.listen(port, () => {
dbConnection.connectToServer(err => {
if (err) console.error(err);
});
console.log(`Server is running on port: ${port}`);
});
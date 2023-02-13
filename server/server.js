import express from 'express';
import cors from 'cors';
import productsRouter from "./routes/products.js";
//importing the connection from conn.js file
import dbo from "./db/conn.js";

const app = express();
const port = process.env.PORT || 5000;

//cors errors
app.use(cors());

app.use(express.json());
//directing all pings to the productRouter?
app.use(productsRouter);


app.listen(port, () => {
//accessing the connectToserver method in the dbo object
dbo.connectToServer(err => {
if (err) console.error(err);
});
console.log(`Server is running on port: ${port}`);
});
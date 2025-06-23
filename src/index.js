import "dotenv/config";
import express from "express";
const app = express();

port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on ${process.env.BASE_URL}:${process.env.PORT}`);
})
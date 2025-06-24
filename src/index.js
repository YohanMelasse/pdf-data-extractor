import "dotenv/config";
import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import { router } from "./routes/router.js";
const app = express();

const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(errorHandler);
app.use("/api", router);

app.listen(port, () => {
  console.log(`server is running on ${process.env.BASE_URL}:${process.env.PORT}`);
});
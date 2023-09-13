import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(234).send("hello there");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connected to the database");
    app.listen(PORT, () => {
      console.log(`server listening at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

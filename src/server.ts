import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

//Base router
import baseRouter from "./router";
import { connect } from "./db/connection";
app.use("/api", baseRouter);

app.listen(process.env.PORT, async() => {
  await connect();
  console.log(`server listening on http://localhost:${process.env.PORT}`);
});

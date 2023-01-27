import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {usersRouter, postsRouter} from "./routes/index.js";

dotenv.config();

const app = express();
app
    .use(cors())
    .use(express.json())
    .get("/health", (_req, res) => res.send("Blz!"))
    .use("/users", usersRouter)
    .use("/posts", postsRouter);

const port = +process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
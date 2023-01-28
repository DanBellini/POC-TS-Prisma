import { Router } from "express";
import { getAllPost } from "../controllers/posts.controller.js";

const postsRouter = Router();

postsRouter.get("/timeline", getAllPost)

export { postsRouter };
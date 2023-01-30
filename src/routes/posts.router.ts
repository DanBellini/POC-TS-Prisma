import { Router } from "express";
import { getAllPost, postPost } from "../controllers/posts.controller.js";
import { validationSchema } from "../middlewares/schema.validate.middleware.js";
import { createPostSchema } from "../schemas/post.schema.js";

const postsRouter = Router();

postsRouter.get("/timeline", getAllPost);
postsRouter.post("/:idUser", validationSchema(createPostSchema,422), postPost)

export { postsRouter };
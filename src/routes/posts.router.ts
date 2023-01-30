import { Router } from "express";
import { getAllPost, postComment, postPost } from "../controllers/posts.controller.js";
import { validationSchema } from "../middlewares/schema.validate.middleware.js";
import { createCommentSchema } from "../schemas/comment.schema.js";
import { createPostSchema } from "../schemas/post.schema.js";

const postsRouter = Router();

postsRouter.get("/timeline", getAllPost);
postsRouter.post("/:idUser", validationSchema(createPostSchema,422), postPost);
postsRouter.post("/comments/:idUser", validationSchema(createCommentSchema,422), postComment);

export { postsRouter };
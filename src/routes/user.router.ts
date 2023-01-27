import { Router } from "express";
import { userPost } from "../controllers/users.controller.js";
import { validationSchema } from "../middlewares/schema.validate.middleware.js";
import { createUserSchema } from "../schemas/user.schema.js";

const usersRouter = Router();

usersRouter.post("/", validationSchema(createUserSchema, 422), userPost)

export { usersRouter };
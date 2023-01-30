import { CreatePostParamsSchema } from "../protocols/posts.protocols.js"; 
import Joi from "joi";

export const createPostSchema = Joi.object<CreatePostParamsSchema>({
    description: Joi.string().min(1).max(100).required()
})
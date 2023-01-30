import { CreateCommentParamsSchema } from "../protocols/comments.protocols.js";
import Joi from "joi";

export const createCommentSchema = Joi.object<CreateCommentParamsSchema>({
    comment: Joi.string().min(1).max(100).required(),
    postId: Joi.number().required()
});
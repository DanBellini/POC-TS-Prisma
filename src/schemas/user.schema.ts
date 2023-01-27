import { CreateUserParams } from "../protocols/users.protocols";
import Joi from "joi";

export const createUserSchema = Joi.object<CreateUserParams>({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(3).max(50).required(),
    password: Joi.string().min(3).max(50).required()
});
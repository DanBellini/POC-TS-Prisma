import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateUserParams } from "../protocols/users.protocols.js";
import userServices from "../services/users.service.js";

export async function userPost(req: Request, res: Response) {
    const newUser = req.body as CreateUserParams;

    try {
        await userServices.createNewUser(newUser)

        return res.status(201).send("New User cadastred!")
    } catch (error) {
        if (error.name === "InvalidEmailError") {
            return res.status(httpStatus.CONFLICT).send(error);
        }
    
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
import { Request, Response } from "express";
import { CreateUserParams } from "../protocols/users.protocols.js";
import userServices from "../services/users.services.js";

export async function userPost(req: Request, res: Response) {
    const newUser = req.body as CreateUserParams;

    try {
        await userServices.createNewUser(newUser)

        return res.status(201).send("New User cadastred!")
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error on userpost")
    }
}
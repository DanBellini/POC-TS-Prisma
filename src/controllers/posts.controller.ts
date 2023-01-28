import { Request, Response } from "express";
import httpStatus from "http-status";
import postServices from "../services/posts.service.js";

async function getAllPost(req: Request, res:Response) {
    try {
        const timeline = await postServices.getPosts();

        return res.status(httpStatus.OK).send(timeline);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

export { getAllPost };
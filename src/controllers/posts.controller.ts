import { Request, Response } from "express";
import httpStatus from "http-status";
import postServices from "../services/posts.service.js";
import {CreatePostParams, CreatePostParamsSchema} from "../protocols/posts.protocols.js"

async function getAllPost(req: Request, res:Response) {
    try {
        const timeline = await postServices.getTimeline();

        return res.status(httpStatus.OK).send(timeline);
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

async function postPost(req: Request, res:Response) {
    const {idUser} = req.params;
    const {description} = req.body as CreatePostParamsSchema;

    const userIdPost = Number(idUser);
    
    const createPostParams: CreatePostParams = {
        userIdPost: userIdPost,
        description: description
    };

    try {
        await postServices.createNewPost(createPostParams);

        res.sendStatus(httpStatus.CREATED);    
    } catch (error) {

        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

async function postComment() {
    
};

export { getAllPost, postPost, postComment };
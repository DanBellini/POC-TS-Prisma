import conflictError from "../errors/conflict.error.js";
import notFoundError from "../errors/notfount.error.js"
import { CreateCommentParams } from "../protocols/comments.protocols.js";
import { CreatePostParams } from "../protocols/posts.protocols.js";
import postsRepositories from "../repositories/posts.repository.js"
import userRepositories from "../repositories/users.repository.js";

async function getTimeline(){
   const timeline = await postsRepositories.timeline();

   if(!timeline){
    throw notFoundError();
   };

   return timeline;
};

async function createNewPost(createPostParams: CreatePostParams) {
    const user = await userRepositories.getUserWithId(createPostParams.userIdPost);

    if(!user){
        throw conflictError("User not cadastred!");
    };

    await postsRepositories.createPost(createPostParams);
};

async function createNewComment(createCommentParams: CreateCommentParams) {
    const user = await userRepositories.getUserWithId(createCommentParams.userIdComment);
    if(!user){
        throw conflictError("User not cadastred!");
    };

    const post = await postsRepositories.getPostWithIdPost(createCommentParams.postId);
    if(!post){
        throw conflictError("Post not find!");
    };

    await postsRepositories.createComment(createCommentParams);
};

const postServices = { 
    getTimeline,
    createNewPost,
    createNewComment
};

export default postServices;
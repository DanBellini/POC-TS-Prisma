import notFoundError from "../errors/notfount.error.js"
import { CreatePostParams } from "../protocols/posts.protocols.js";
import postsRepositories from "../repositories/posts.repository.js"
import userRepositories from "../repositories/users.repository.js";

async function getTimeline(){
   const timeline = await postsRepositories.timeline();

   if(!timeline){
    throw notFoundError();
   }

   return timeline;
};

async function createNewPost(createPostParams: CreatePostParams) {
    const user = await userRepositories.getUserWithId(createPostParams.userIdPost);

    if(!user){
        throw notFoundError();
    }

    await postsRepositories.createPost(createPostParams);
};

async function createNewComment() {
    
}

const postServices = { 
    getTimeline,
    createNewPost,
    createNewComment
}

export default postServices
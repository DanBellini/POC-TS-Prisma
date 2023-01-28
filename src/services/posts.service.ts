import notFoundError from "../errors/notfount.error.js"
import postsRepositories from "../repositories/posts.repository.js"

async function getPosts(){
   const timeline = await postsRepositories.timeline();

   if(!timeline){
    throw notFoundError();
   }

   return timeline;
}

const postServices = { 
    getPosts
}

export default postServices
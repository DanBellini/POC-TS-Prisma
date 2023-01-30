import prisma from "../config/database.js";
import { CreateCommentParams } from "../protocols/comments.protocols.js";
import { CreatePostParams } from "../protocols/posts.protocols.js";

async function timeline() {
    return prisma.post.findMany({
        include:{
            users:{
                select:{
                    name:true
                }
            },
            comments:{
                include:{
                    users:{
                        select:{
                            name:true
                        }
                    }
                }
            }
        }
    });
};


async function createPost(post: CreatePostParams) {
    return prisma.post.create({
        data: post
    });
};


async function getPostWithIdPost(id: number) {
    return prisma.post.findUnique({
        where:{
            id: id
        }
    });
};

async function createComment(comment: CreateCommentParams) {
    return prisma.comment.create({
        data: comment
    });
};

const postsRepositories ={
    timeline,
    createPost,
    createComment,
    getPostWithIdPost
};

export default postsRepositories;
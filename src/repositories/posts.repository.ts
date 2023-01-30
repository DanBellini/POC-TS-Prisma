import prisma from "../config/database.js";

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
    })
}

const postsRepositories ={
    timeline
};

export default postsRepositories;
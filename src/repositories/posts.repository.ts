import prisma from "../config/database.js";

async function timeline() {
    return prisma.post.findMany({
        include:{
            user:{
                select:{
                    name: true
                }
            },
            Comment: {
                include:{
                    user:{
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
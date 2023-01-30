
import prisma from "../config/database.js";
import { CreateUserParams, User} from "../protocols/users.protocols.js";

async function getUserWithEmail(email:string): Promise<User> {
    return prisma.user.findUnique({
        where:{
            email: email
        }
    })
}


async function createNewUser(newUser: CreateUserParams) {
    return prisma.user.create({
        data: newUser
    })
};

async function getUserWithId(id: number) {
    return prisma.user.findUnique({
        where: {
            id:id
        }
    })
}

const userRepositories ={
    createNewUser,
    getUserWithEmail,
    getUserWithId
};

export default userRepositories;
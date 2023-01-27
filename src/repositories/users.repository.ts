
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

const userRepositories ={
    createNewUser,
    getUserWithEmail
};

export default userRepositories;
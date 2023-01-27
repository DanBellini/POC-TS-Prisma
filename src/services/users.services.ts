import conflictError from "../errors/conflict.error.js";
import { CreateUserParams } from "../protocols/users.protocols.js";
import userRepositories from "../repositories/users.repository.js";

//async function createNewUser(NewUser: CreateUserParams): Promise<void> {
async function createNewUser(newUser: CreateUserParams) {
    const {email} = newUser;

    
    const emailAlreadyExist = await userRepositories.getUserWithEmail(email)

    if(emailAlreadyExist){
        throw conflictError(`Unable to register this email`)
    }
    await userRepositories.createNewUser(newUser)
};

const userServices = {
    createNewUser
};

export default userServices;
import conflictError from "../errors/conflict.error.js";
import { CreateUserParams } from "../protocols/users.protocols.js";

async function createNewUser(NewUser: CreateUserParams): Promise<void> {
    const emailAlreadyExist = true

    if(emailAlreadyExist){
        throw conflictError(`Unable to register this email`)
    }
};

const userServices = {
    createNewUser
};

export default userServices;
import { invalidEmailError } from "../errors/invalid-email.error.js";
import { CreateUserParams } from "../protocols/users.protocols.js";
import userRepositories from "../repositories/users.repository.js";

async function createNewUser(newUser: CreateUserParams) {
    const {email} = newUser;

    
    const emailAlreadyExist = await userRepositories.getUserWithEmail(email);

    if(emailAlreadyExist){
        throw invalidEmailError(email);
    };
    await userRepositories.createNewUser(newUser);
};

const userServices = {
    createNewUser
};

export default userServices;
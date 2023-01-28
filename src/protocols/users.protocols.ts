export type UserEntity = {
    id: number
    name: string
    email: string
    password: string
    createAt?: Date
}

export type CreateUserParams = Omit<UserEntity, "id" | "createAt">

export type User = Omit<UserEntity, "password" | "email"> 
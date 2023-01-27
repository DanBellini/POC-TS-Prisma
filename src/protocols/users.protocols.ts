export type UserEntity = {
    id: number
    name: string
    email: string
    password: string
}

export type CreateUserParams = Omit<UserEntity, "id">

export type User = Omit<UserEntity, "password" | "email"> 
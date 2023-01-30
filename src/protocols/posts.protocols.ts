export type PostEntity = {
    id: number
    description: string
    userIdPost: number
    createAt?: Date
}

export type CreatePostParamsSchema = Omit<PostEntity, "id" | "createAt" | "userIdPost">

export type CreatePostParams = Omit<PostEntity, "id" | "createAt">
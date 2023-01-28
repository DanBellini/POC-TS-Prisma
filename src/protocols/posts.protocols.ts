export type PostEntity = {
    id: number
    description: string
    userIdPost: string
    createAt?: Date
}

export type CreatePostParams = Omit<PostEntity, "id" | "createAt">
export type CommentEntity = {
    id: number
    comment: string
    userIdComment: number
    postId: number
    createAt?: Date 
}

export type CreateCommentParamsSchema = Omit<CommentEntity, "id" | "createAt" | "userIdComment">

export type CreateCommentParams = Omit<CommentEntity, "id" | "createAt">

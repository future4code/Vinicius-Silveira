import { post } from "../business/entities/post"
import { connection } from "../data/connection"
import { convertPostTypeToString } from "./model/postModel"

export const insertPost = async (
    post: post
) => {
    await connection
        .insert ({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: convertPostTypeToString(post.type),
            created_at: post.createdAt,
            author_Id: post.authorId
        })
        .into('labook_posts')
}
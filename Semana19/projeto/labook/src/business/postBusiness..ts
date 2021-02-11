import { convertStringToPostType, getDateNow } from "../data/model/postModel"
import { insertPost } from "../data/postDataBase"
import { createPostDTO } from "./entities/post"
import { authenticationData } from "./entities/user"
import { getTokenData } from "./services/authenticator"
import { generateId } from "./services/idGenerator"

export const businessCreatePost = async (    
    input: createPostDTO,
    authorization:string
) =>{
    if(
        !input.photo ||
        !input.description ||
        !input.type       
    ) {
        throw new Error ("Fill all the fields, photo, description, type, createdAt")
    }

    if(!authorization){
        throw new Error("You must inform an authorization token in headers")
    }

    const verifyToken: authenticationData = getTokenData(authorization as string)
    if(!verifyToken){
        throw new Error ("You must logged in !")
    }

    const id: string = generateId()
    const authorId: string = verifyToken.id
    
    const post = {
        id,
        photo: input.photo,
        description: input.description,
        type: convertStringToPostType(input.type),
        createdAt: getDateNow(),
        authorId
    }

    await insertPost(post)
}
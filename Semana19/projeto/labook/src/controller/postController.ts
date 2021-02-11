import { Request, Response } from "express"
import { createPostDTO } from "../business/entities/post"
import { authenticationData } from "../business/entities/user"
import { businessCreatePost } from "../business/postBusiness."

export const createPost = async(
    req: Request,
    res: Response
): Promise<any> =>{
    try{
        
        const token: string = req.headers.authorization as string

        const input: createPostDTO ={
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,            
        }

        await businessCreatePost(input,token)

        res.status(200).send({
            message:"Post created succesfully"
        })
    }
    catch(error){
        res.status(500).send(error.message)
    }
}
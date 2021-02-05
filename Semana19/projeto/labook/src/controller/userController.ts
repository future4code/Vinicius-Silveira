import { Request, Response} from "express"
import { signupInputDTO } from "../business/entities/user"
import { businessSignup } from "../business/userBusiness"

let errorCode: number = 400

export const signup = async (
    req: Request,
    res: Response
) =>{
    try{
        const input: signupInputDTO = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const token = await businessSignup(input)
        res.status(200).send({
            message: "User created !",
            token
        })
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
}


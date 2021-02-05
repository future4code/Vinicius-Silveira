import { hash } from "./services/hashManager";
import { insertUser } from "../data/userDataBase";
import { signupInputDTO } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";

let errorCode: number = 400

export const businessSignup = async (
    input: signupInputDTO
) => {
    if(!input.name || input.email || input.password){
        errorCode = 403
        throw new Error(`Fill all the fields, name, email and password corretly`)
    }

    const id: string = generateId()
    const cypherPassword = await hash(input.password)
    const user = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword
    }

    await insertUser(user)

    const token: string = generateToken({id})

    return token
}
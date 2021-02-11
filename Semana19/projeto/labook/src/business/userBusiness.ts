import { hash } from "./services/hashManager";
import { insertUser, selectUserByEmail } from "../data/userDataBase";
import { signupInputDTO, user } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { compare } from "bcryptjs";

export const businessSignup = async (
    input: signupInputDTO
) => {
    if(!input.name || !input.email || !input.password){        
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

export const businessLogin = async (
    email: string,
    password: string
) => {
    if(!email || !password){
        throw new Error ("'email' and 'password' must be provided")
    }

    const user: user = await selectUserByEmail(email)
    if(!user){
        throw new Error('User not found')
    }

    const checkPassword: boolean = await compare(password,user.password)
    if(!checkPassword){
        throw new Error ('Invalid Password')
    }

    const token: string = generateToken({id:user.id})

    return token
}
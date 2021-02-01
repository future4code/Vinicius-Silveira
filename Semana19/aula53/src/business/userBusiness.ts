import { compare } from "bcryptjs";
import { insertUser, selectUserByEmail } from "../data/userDataBase";
import { user, User_Roles } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { generateHash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";

export const businessSignup = async (
    name: string,
    email: string,
    password: string,
    role: User_Roles
) => {
    if(
        !name || 
        !email ||
        !password ||
        !role
    ){
        throw new Error('Preencha os campos "name","email","password" e "role"')
    }
    const id: string = generateId()
    const cypherPassword = await generateHash(password)

    await insertUser({
        id,
        name,
        email,
        password: cypherPassword,
        role
    })

    const token: string = generateToken({
        id,
        role: role
    })

    return token
}

export const businessLogin = async (
    email: string,
    password: string
) => {
    if(!email || ! password){
        throw new Error ("Digite email e senha")
    }

    const user: user = await selectUserByEmail(email)
    if(!user){
        throw new Error("Usuário não encontrado ou senha inválida ")
    }

    const comparePassword: boolean = await compare(password,user.password)
    if(!comparePassword){
        throw new Error("Senha inválida")
    }

    const token: string = generateToken({
        id: user.id,
        role: user.role
    })
    return token
}
import * as jwt from "jsonwebtoken"
import { authenticationData } from "../entities/user"

export const generateToken = (
    payload: authenticationData
): string =>{
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {expiresIn: process.env.JWT_EXPIRES_IN || "24min"}
    )
}

export const getTokenData = (
    token: string
): authenticationData =>{
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as authenticationData
}
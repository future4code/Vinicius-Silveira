import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { authenticationData } from "../types/types"

dotenv.config()


export const generateToken = (id:string):string =>{
    const token: string = jwt.sign({id},
        process.env.JWT_KEY as string,
        {expiresIn:process.env.JWT_EXPIRE_TIME as string || "1d"})
    return token
}

export const getTokenData = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
  
};
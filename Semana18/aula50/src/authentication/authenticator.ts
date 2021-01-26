import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { authenticationData } from "../types/types"

dotenv.config()


export function generateToken(id:string):string{
    const token: string = jwt.sign({id},
        process.env.JWT_KEY as string,
        {expiresIn:process.env.JWT_EXPIRE_TIME as string || "1d"})
    return token
}
// import * as jwt from "jsonwebtoken";

//   const expiresIn = "1min"

//   export const generateToken = (input: AuthenticationData): string => {
//     const token = jwt.sign(
//       {
//         id: input.id,
//       },
//       process.env.JWT_KEY as string,
//       {
//         expiresIn
//       }
//     );
//     return token;
//   }

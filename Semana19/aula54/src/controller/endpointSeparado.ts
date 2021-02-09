import { Request, Response } from "express";
import {businessSignup } from "../business/userBusiness";
export const signupSeparado = async (
    req: Request,
    res: Response
 ) => {
    try {
       const { name, nickname, email, password, role } = req.body
 
       const token = await businessSignup(
          name,
          nickname,
          email,
          password,
          role
       )
 
       res
          .status(201)
          .send({
             message: "Usuário criado!",
             token
          })
 
    } catch (error) {
       res.status(400).send(error.message)
    }
 }
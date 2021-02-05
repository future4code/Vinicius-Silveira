import express from "express"
import { signup } from "../userController"

export const userRouter = express.Router()

userRouter.post("/signup",signup)


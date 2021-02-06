import express from "express"
import { createPost } from "../postController"

export const postRouter = express.Router()

postRouter.post("/create",createPost)
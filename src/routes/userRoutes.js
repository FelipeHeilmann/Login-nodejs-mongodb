import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router()

router
    .post('/auth/register', UserController.insertUser)
    .post('/auth/login',UserController.loginUser )

export default router
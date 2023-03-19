import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router()

router
    .post('/auth/register', UserController.insertUser)

export default router
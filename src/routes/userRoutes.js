import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { validateUserToken } from "../midlewares/userMidleware.js";

const router = Router()

router
    .get('/user/:id', validateUserToken, UserController.getUsetInfo)
    .post('/auth/register', UserController.insertUser)
    .post('/auth/login',UserController.loginUser)

export default router
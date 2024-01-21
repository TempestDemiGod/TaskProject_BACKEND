import { Router } from "express";
import { registerRequest ,loginRequest, logOutRequest } from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/validatorToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router()

router.post('/signin',validateSchema(loginSchema),loginRequest)
router.post('/signup',validateSchema(registerSchema),registerRequest)
router.get('/logout',logOutRequest)
router.get('/token',authRequired,(req, res)=> res.status(201).send({message: 'token valido'}))


export default router
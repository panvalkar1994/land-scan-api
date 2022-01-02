import { Router } from "express";
import { loginHandler, signUpHandler } from "../controller/user.controller";
const router = Router();

// create a new user and log in
router.post("/signup", signUpHandler);

// log into existing user
router.post('/login', loginHandler);


export default router;

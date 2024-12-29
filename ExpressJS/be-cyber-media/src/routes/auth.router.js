import express from "express";
import authControler from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post( `/register` , authControler.register)

authRouter.post( `/login` , authControler.login)

authRouter.post( `/facebook-login` , authControler.facebookLogin)

export default authRouter;
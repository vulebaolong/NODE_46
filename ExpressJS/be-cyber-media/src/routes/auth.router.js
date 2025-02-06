import express from "express";
import authControler from "../controllers/auth.controller.js";
import { protect } from "../common/middlewares/protect.middleware.js";

const authRouter = express.Router();

authRouter.post( `/register` , authControler.register)

authRouter.post( `/login` , authControler.login)

authRouter.post( `/facebook-login` , authControler.facebookLogin)

authRouter.post(`/refresh-token`, authControler.refreshToken)

authRouter.get(`/get-info`,protect,  authControler.getInfo)

export default authRouter;
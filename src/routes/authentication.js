import express from "express";
import { login, signUp, changePassword } from "../controllers/authentication";
import { logger, verifyToken } from "../middleware";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", logger, signUp);
authRouter.post("/changepassword", verifyToken, changePassword);

export default authRouter;

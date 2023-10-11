import express from "express";
import { login, signUp } from "../controllers/authentication";
import { logger } from "../middleware";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", logger, signUp);

export default authRouter;

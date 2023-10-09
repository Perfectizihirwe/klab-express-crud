import express from "express";
import { getAuth } from "../controllers/authentication";

const authRouter = express.Router();

authRouter.get("/auth", getAuth);

export default authRouter;

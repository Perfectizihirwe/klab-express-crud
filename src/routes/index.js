import express from "express";
import authRouter from "./authentication";
import newsLetterRouter from "./newsLetter";
import tourRouter from "./tour";

const mainRouter = express.Router();

//Modules in our server
mainRouter.use("/auth", authRouter);
mainRouter.use("/newsLetter", newsLetterRouter);
mainRouter.use("/tour", tourRouter);

export default mainRouter;

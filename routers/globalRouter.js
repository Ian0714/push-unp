import express from "express";
import routes from "../routes";
import { home } from "../controllers/basicController";
import { join, login } from "../controllers/userController";

export const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);

export default globalRouter;
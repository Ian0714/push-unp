import express from "express";
import routes from "../routes";
import { home } from "../controllers/basicController";
import { getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";

export const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);

export default globalRouter;
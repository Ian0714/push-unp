import express from "express";
import routes from "../routes";
import { user, userDetail, userInfo, userProfile, editProfile, editInfo, changePassword } from "../controllers/userController";

export const userRouter = express.Router();

userRouter.get(routes.user, user);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.userProfile, userProfile);
userRouter.get(routes.userInfo, userInfo);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.editInfo, editInfo);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
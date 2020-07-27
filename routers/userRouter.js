import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("userPage"));
userRouter.get("/edit", (req, res) => res.send("userEditPage"));
userRouter.get("/login", (req, res) => res.send("loginPage"));

export default userRouter;
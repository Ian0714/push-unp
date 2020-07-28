import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";
import { localMiddleware } from "./middlewares";

const app = express();


app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan("dev"));
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);

export default app;
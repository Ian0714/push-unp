import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Push!";
    res.locals.routes = routes;
    next();
};
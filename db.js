import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const opn = () => console.log("DB Connected");
const err = error => console.log("DB Error");

db.once("open", opn);
db.on("error", err);
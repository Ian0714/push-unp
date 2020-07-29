import mongoose, { Schema } from "mongoose";
import { text } from "body-parser";

const PushSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        default: Date.now
    },
    textGoal: {
        type: String
    }
});

const model = mongoose.model("push", PushSchema);
export default model;
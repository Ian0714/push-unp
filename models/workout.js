import mongoose, { Schema } from "mongoose";

const PushSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        default: Date.now
    },
    todayPushUp: {
        type: Number,
        default: 0
    },
    weeklyPushUp: {
        type: Number,
        default: 0
    },
    monthlyPushUp: {
        type: Number,
        default: 0
    },
    todayGoal: {
        type: Number,
        default: 0
    },
    weeklyGoal: {
        type: Number,
        default: 0
    },
    monthlyGoal: {
        type: Number,
        default: 0
    }
});

const model = mongoose.model("push", PushSchema);
export default model;
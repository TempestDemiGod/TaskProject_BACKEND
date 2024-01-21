import mongoose from "mongoose";
import { string } from "zod";

const courseSchema = new mongoose.Schema({
    nameCourse: {
        type: String,
        required: true,
        trim: true
    },
    contextCourse: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model('Course', courseSchema)
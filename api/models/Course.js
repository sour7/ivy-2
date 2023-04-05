import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  id: { type: Number},
  type: { type: String, required: true },
  courseDesc: {
    img: { type: String },
    title: { type: String, required: true },
    subtitle: { type: String },
    point1: { type: String },
    point2: { type: String },
    point3: { type: String },
    rating: { type: Number },
    totalEnroll: { type: Number },
    hour: { type: String },
    lecture: { type: String },
    alumni: { type: String }
  }
});

export default mongoose.model("Course", courseSchema)

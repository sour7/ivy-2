import express from "express";
import { createCourse, getAllCourses, getaCourse } from "../controllers/course.js";

const router = express.Router();

router.post("/create", createCourse)
router.get("/", getAllCourses)
router.get("/:id", getaCourse)

export default router;
import { Router } from "express";
import { addCourseRequest, allCourseRequest, deleteCourseRequest, getCourseRequest, updateCourseRequest } from "../controllers/course.controllers.js";
import { authRequired } from "../middlewares/validatorToken.js";
import { validateCourseSchema } from "../middlewares/validator.middleware.js";
import { addCourseSchema, updateCourseSchema } from "../schemas/course.schema.js";

const router = Router()

router.get('/courses',authRequired,allCourseRequest)

router.get('/course/:id',authRequired,getCourseRequest)

router.post('/course',authRequired,validateCourseSchema(addCourseSchema),addCourseRequest)

router.put('/course/:id',authRequired,validateCourseSchema(updateCourseSchema),updateCourseRequest)

router.delete('/course/:id',authRequired,deleteCourseRequest)

export default router
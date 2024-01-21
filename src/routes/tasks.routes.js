import { Router } from "express";
import { authRequired } from "../middlewares/validatorToken.js";
import { validateTasksSchema } from "../middlewares/validator.middleware.js";
import { addTasksSchema, updateTasksSchema,  } from "../schemas/tasks.schema.js";
import { addTaskRequest, deleteTaskRequest, getTaskRequest, getTasksRequest, updateTaskRequest } from "../controllers/tasks.controllers.js";

const router = Router()

router.post('/tasks',authRequired,validateTasksSchema(addTasksSchema),addTaskRequest)

router.get('/tasks',authRequired,getTasksRequest)

router.get('/tasks/:id',authRequired,getTaskRequest)

router.delete('/task/:id',authRequired,deleteTaskRequest)

router.put('/task/:id',authRequired,validateTasksSchema(updateTasksSchema),updateTaskRequest)

export default router
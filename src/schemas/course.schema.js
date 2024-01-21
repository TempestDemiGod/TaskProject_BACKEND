import { z } from "zod";

export const addCourseSchema = z.object({
    nameCourse: z.string({
        required_error: 'el nombre del curso es requerido'
    }).min(4,{
        message: 'El curso debe tener min 4 caracteres'
    }),
    contextCourse: z.string({
        required_error: 'el contexto del curso es requerido'
    })
}) 

export const updateCourseSchema = z.object({
    nameCourse: z.string({
        required_error: 'El nombre del curso es requerido'
    }).min(4,{
        message: 'El curso debe tener min 4 caracteres'
    })
})
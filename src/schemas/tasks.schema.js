import { z } from "zod";


export const addTasksSchema = z.object({
    title: z.string({
        required_error: 'El titulo es requerido'
    }).min(6,{
        message: 'Longitud minima del titulo es 6 caracteres'
    }),
    constext: z.string({
        required_error: 'El contexto es requerido'
    }),
    topic: z.string().optional()
})

export const updateTasksSchema = z.object({
    title: z.string({
        required_error: 'El titulo es requerido'
    }).min(6,{
        message: 'Longitud minima del titulo es 6 caracteres'
    })
})
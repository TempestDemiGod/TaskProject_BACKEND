import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'usuario es requerido'
    }).min(1, {
        message: 'usuario es requerido'
    }), 
    email: z.string({
        required_error: 'email es requerido'
    }).min(1, {
        message: 'email es requerido'
    }).email({
        message: 'email es invalido'
    }) , 
    password: z.string({
        required_error: 'password es requerido'
    }).min(6, {
        message: 'password tiene que ser mayor de 6 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'email es requerido'
    }).email({
        message: 'invalid email'
    }),
    password: z.string({
        required_error: 'password requerido'
    }).min(6,{
       message: 'password debe ser mayor de 6 caracteres' 
    })
})
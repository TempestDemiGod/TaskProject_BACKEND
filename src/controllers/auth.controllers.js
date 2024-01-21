import user from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'

export const registerRequest = async(req, res) => {
    try {
        const {email, password, username} = req.body
        const UserFound = await user.findOne({email})

        if(UserFound) return res.status(400).send(['El email esta en uso'])

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new user({
            email,
            username,
            password: passwordHash
        })

        const userSave = await newUser.save()
        
        const token = await createAccessToken({id: userSave._id})

        res.cookie('token', token)
        res.json({
            status: 'The user created successfully',
            data: {
                userSave
            }
        })

    } catch (e) {
        console.log(e)
    }
}

export const loginRequest = async(req, res)=> {
    try {
        const {email, password} = req.body
        console.log(req.body)
        console.log(email)
        console.log(password)
        const userFound = await user.findOne({email})
        if(!userFound) return res.status(400).json(['El email no esta registrado'])

        const match = await bcrypt.compare(password, userFound.password);

        if(!match) return res.status(400).send(['password incorrecta'])

        const token = await createAccessToken({id: userFound._id})

        res.cookie('token',token).json(userFound)

    } catch (e) {
        console.log(e)
    }
}

export const logOutRequest = async(req, res)=> {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}
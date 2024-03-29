import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = async(req, res, next) => {
    try {
        const {token} = req.cookies
        console.log('token')
        console.log(token)
        console.log('body')
        console.log(req.headers)
        if(!token){
            return res.status(401).json({message: 'token invalido'})
        }

        jwt.verify(token, TOKEN_SECRET, (err, user)=>{
            if(err) return res.status(401).json({message: 'token invalido'})

            req.user = user 

            next()
        })
    } catch (e) {
        console.log(e)
    }
}

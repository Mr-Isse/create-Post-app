import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';


export const authanticate=(req,res,next)=>{
    const token= req.cookies.token;
    if(!token){
        return res.status(403).send("un Authorized ")
    }

    try {
        
        const decoded= jwt.verify(token,JWT_SECRET);
        req.user=decoded;

        next();
    } catch (error) {
        
    }


}
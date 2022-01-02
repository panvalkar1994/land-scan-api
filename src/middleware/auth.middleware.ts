import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export function auth(req:Request, res:Response, next:NextFunction){
    const authHeader  = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, userId)=>{
        if(err) return res.status(403).send();
        req.body.userId = userId;
        next();
    });
    
}
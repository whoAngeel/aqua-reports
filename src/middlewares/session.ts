import { unauthorized } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";


export const checkJWT = (req: Request, res: Response, next:NextFunction)=>{
    try {
        const token = req.headers.authorization || null
        const jwt = token?.split(' ').pop
    } catch (error) {
        throw unauthorized()
    }
}

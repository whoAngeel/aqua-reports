import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const header = req.headers
    const userAgent = header['user-agent']
    console.log('UserAgent', userAgent);
    next()
}

export {logMiddleware}
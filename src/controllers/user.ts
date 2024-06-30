import { NextFunction, Request, Response } from "express"
import { findAll, register } from "../services/user.service"


export const postUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = req.body
        const newUser = await register(data)
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
}

export const getUsers = async(req: Request,res: Response,next: NextFunction)=>{
    try {
        const rta = await findAll()
        res.json(rta)
    } catch (error) {
        next(error)
    }
}
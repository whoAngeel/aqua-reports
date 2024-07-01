import { NextFunction, Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const rta = await registerNewUser(data)
        return res.status(201).json(rta)
    } catch (error) {
        next(error)
    }
}

export const login =  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {password, email} = req.body
        const rta = await loginUser(email, password)
        return res.json(rta)
    } catch (error) {
        next(error)
    }
}
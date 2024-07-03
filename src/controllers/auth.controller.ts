import { NextFunction, Request, Response } from "express";
import { loginUser, registerNewUser, signToken } from "../services/auth.service";
import { IUser } from "../interfaces/user.type";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const rta = await registerNewUser(data)
        return res.status(201).json(rta)
    } catch (error) {
        next(error)
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, email } = req.body
        const rta = await loginUser(email, password)
        return res.json(rta)
    } catch (error) {
        next(error)
    }
}

export const googleLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const user = req.user as { id: string, role: string }
        const user = req.user
        console.log(user)
        // const token = signToken(user)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const googleCallback = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const user = req.user as { id: string, role: string }
        const user = req.user
        console.log('usuario',user)

        const token = signToken(user)
        res.status(200).json(token)
    } catch (error) {
        next(error)
    }
}
import { NextFunction, Request, Response } from "express";
import { myProfile, myReports, reportsInMyArea } from "../services/profile.service";

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user as { id: string }
        const rta = await myProfile(id)
        return res.json(rta)
    } catch (error) {
        next(error)
    }
}

export const getMyReports = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user as { id: string }
        const rta = await myReports(id)
        return res.json(rta)
    } catch (error) {
        next(error)
    }
}

export const getReportsInMyArea = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user as { id: string }
        const rta = await reportsInMyArea(id)
        return res.json(rta)
    } catch (error) {
        next(error)
    }
}
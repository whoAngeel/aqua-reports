import { NextFunction, Request, Response } from "express"
import { create, findAll, findById, softDelete } from "../services/reports.service"


export const getReports = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const rta = await findAll()
        return res.json(rta)
    } catch (error) {
        next(error)
    }

}

export const getReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const rta = await findById(id)
        return res.json(rta)
    } catch (error) {
        next(error)
    }

}


export const postReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data  = req.body
        const rta = await create(data)
        return res.status(201).json(rta)
    } catch (error) {
        next(error)
    }

}

export const patchReport = async (req: Request, res: Response, next: NextFunction) => {// TODO Hacer este metodo 
    try {
        const { id } = req.params
        const data = req.body
        
    } catch (error) {
        next(error)
    }

}

export const deleteReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id} = req.params
        const rta = await softDelete(id)
        return res.json(rta)
    } catch (error) {
        next(error)
    }

}

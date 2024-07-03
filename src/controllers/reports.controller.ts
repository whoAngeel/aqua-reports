import { NextFunction, Request, Response } from "express"
import { create, findAll, findById, softDelete, updateStatus } from "../services/reports.service"


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
        const { id } = req.params
        const rta = await findById(id)
        return res.json(rta)
    } catch (error) {
        next(error)
    }

}

export const postImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { file } = req
        const dataToRegister = {
            url: `${file?.path}`,
        }
        return res.json({
            message: "Subiendo imagen",
            dataToRegister
        })
    } catch (error) {
        next(error)
    }
}
export const postReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const { file } = req
        const user = req.user as { id: string, role: string };
        const rta = await create(user.id, { ...data, images: { url: `${file?.path}`, description: 'imagen del reporte' } });

        return res.status(201).json(rta)
    } catch (error) {
        next(error)
    }

}

export const patchReportStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { status, description } = req.body
        const rta = await updateStatus(id, status, description)
        return res.json(rta)
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
        const { id } = req.params
        const rta = await softDelete(id)
        return res.json(rta)
    } catch (error) {
        next(error)
    }

}

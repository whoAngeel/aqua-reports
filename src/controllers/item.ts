
import { NextFunction, Request, Response } from "express"
import { insertCar, findCar, findCars, updateCar, deleteCar } from "../services/item.service"

export const getItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const rta = await findCar(id)
        const data = rta ? rta : { message: "NOT_FOUND" }
        res.send(data)

    } catch (error) {
        next(error)
    }

}

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const rta = await findCars()
        res.json(rta)

    } catch (error) {
        next(error)
    }

}

export const postItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.table(req.body);

        const newItem = await insertCar(req.body)
        res.status(201).send(newItem)
    } catch (error) {
        next(error)
    }

}

export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { id } = req.params
        const data = req.body
        const rta = await updateCar(id, data)
        res.json(rta)

    } catch (error) {
        next(error)
    }

}

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const rta = await deleteCar(id)
        res.json(rta)

    } catch (error) {
        next(error)
    }

}



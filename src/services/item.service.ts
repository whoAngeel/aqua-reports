import { badRequest } from "@hapi/boom"
import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"

const insertCar = async (item: Car) => {
    // if(!item.year || !item.branch || !item.color) throw badRequest("All fields are required")
    const res = await ItemModel.create(item)
    return res
}

const findCars = async () => {
    return await ItemModel.find({})
}

const findCar = async (id: string)=>{
    return await ItemModel.findById(id)
}

// const updateOne = async(id: string, )

export { insertCar , findCars, findCar}
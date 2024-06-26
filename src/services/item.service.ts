import boom, { Boom } from "@hapi/boom"
import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"
import { isValidObjectId } from "mongoose"

const insertCar = async (item: Car) => {
    // if(!item.year || !item.branch || !item.color) throw badRequest("All fields are required")
    const res = await ItemModel.create(item)
    return res
}

const findCars = async () => {
    return await ItemModel.find({})
}

const findCar = async (id: string) => {
    if(!isValidObjectId(id)){
        throw boom.badRequest("Invalid ID format")
    }
    const car = await ItemModel.findOne({ _id: id })
    if (!car) {
        throw boom.notFound("Item not found")
    }
    return car
}

const updateCar = async (id: string, data: Object) => {
    const updatedCar = await ItemModel.findByIdAndUpdate(id, data, { new: true })
    return {
        message: "Car updated!",
        updatedCar
    }
}

const deleteCar = async (id: string) => {
    const deletedCar = await ItemModel.findByIdAndDelete(id)
    return {
        message: "Card deleted",
        id
    }
}


export { insertCar, findCars, findCar, updateCar, deleteCar }
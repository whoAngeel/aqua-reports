import { IUser } from './../interfaces/user.type';
import { UserModel as User } from "../models/user";
import { notFound } from '@hapi/boom';

export const register = async (data: IUser) => {
    const rta = await User.create(data)
    return rta
}

export const findAll = async () => {
    return await User.find()
}

export const findByEmail = async (email: string) => {
    const user = await User.findOne({ email })
    if (!user) throw notFound(`Usuario con email: ${email} no encontrado`)
    return user
}


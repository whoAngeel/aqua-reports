import { IUser } from './../interfaces/user.type';
import {UserModel as User} from "../models/user";

export const register = async(data: IUser)=>{
    const rta = await User.create(data)
    return rta
}

export const findAll = async()=>{
    return await User.find()
}


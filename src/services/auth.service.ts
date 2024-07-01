import { IUser } from "../interfaces/user.type";
import { hash, compare } from 'bcrypt';
import { UserModel } from "../models/user";
import { notAcceptable, notFound, unauthorized, } from "@hapi/boom";
import { generateToken } from "../utils/jwt.handle";
export const registerNewUser = async (data: IUser) => {

    const emailExists = await UserModel.findOne({ email: data.email })
    if (emailExists) throw notAcceptable("EL email ya existe")

    let userData = data

    const hashedPass = await hash(userData.password, 10)
    userData = {
        ...userData,
        password: hashedPass

    }
    const newUser = await UserModel.create(userData)

    return newUser;
}

export const loginUser = async (email: string, password: string) => {
    const user = await UserModel.findOne({ email })
    if (!user) throw notFound(`Usuario con email ${email} no encontrado`)
    const isValid = await compare(password, user.password)
    if (!isValid) throw unauthorized("Credenciales invalidas")
    const token = generateToken(user.id, user.role)
    return {user, token: token}
}
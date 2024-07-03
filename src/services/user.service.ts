import { IUser } from './../interfaces/user.type';
import { UserModel as User } from "../models/user";
import { badData, notFound } from '@hapi/boom';

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


export const findOrCreate = async (data: Partial<IUser>) => {
    try {
        const user = await User.findOne({ email: data.email });

        if (!user) {
            console.log('Creando usuario');
            const newUser = await User.create(data);
            if (!newUser) throw badData('No se pudo crear el usuario');
            return newUser;
        } else {
            return user;
        }
    } catch (error) {
        console.error('Error en findOrCreate:', error);
        throw error;
    }
    // console.log('usuario encontrado');
}
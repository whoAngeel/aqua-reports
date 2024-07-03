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


export const findOrCreate = async(email: string, profile: any)=>{
    const user = await findByEmail(email)
    if(!user){
        // const newUser = await register({email})
        console.log('creando usuario');
        const newUser = await User.create({
            email,
            fullname: profile.displayName

        })
        if(!newUser) throw badData('No se pudo crear el usuario')
        // return newUser
    }
    console.log('usuario encontrado');
    return user
}
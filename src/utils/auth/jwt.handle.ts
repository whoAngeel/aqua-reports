import { sign, verify } from 'jsonwebtoken';
import { IUser } from '../../interfaces/user.type';
import { config } from '../../config/config';

export const generateToken = (id: string, role: string): string => {
    const token = sign({ id: id, role: role }, config.secret, { expiresIn: "1h" })
    return token
}

export const verifyToken = async () => {

}
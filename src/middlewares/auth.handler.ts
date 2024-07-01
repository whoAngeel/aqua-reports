import { IUser } from './../interfaces/user.type';
import { unauthorized } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";


export const checkJWT = (req: Request, res: Response, next:NextFunction)=>{
    try {
        const token = req.headers.authorization || null
        const jwt = token?.split(' ').pop
    } catch (error) {
        throw unauthorized()
    }
}
export function checkRoles(...roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const user = req.user as {id:string, role: string}; // Asegúrate de definir la estructura de `req.user`
    //   console.log(user);
      if (user && roles.includes(user.role)) {
        next();
      } else {
        next(unauthorized());
      }
    };
  }
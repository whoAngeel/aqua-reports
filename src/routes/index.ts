import { Application, Router } from "express";
import UsersRouter from './users.routes';
import AuthRoutes from './auth.routes';
// const PATH_ROUTER = `${__dirname}`

// const router = Router()

// readdirSync(PATH_ROUTER).filter(filename=>{
//     console.log(filename);
// })

export function useAPIRoutes(app: Application){
    const router = Router()
    router.use('/users', UsersRouter)
    router.use('/auth', AuthRoutes)
    app.use(router)
}


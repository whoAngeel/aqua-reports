import { Application, Router } from "express";
import UsersRouter from './users.routes';
import AuthRoutes from './auth.routes';
import ReportsRoutes from './reports.routes';
import ProfileRoutes from './profile.routes'
// const PATH_ROUTER = `${__dirname}`

// const router = Router()

// readdirSync(PATH_ROUTER).filter(filename=>{
//     console.log(filename);
// })

export function useAPIRoutes(app: Application){
    const router = Router()
    router.use('/users', UsersRouter)
    router.use('/auth', AuthRoutes)
    router.use('/reports', ReportsRoutes)
    router.use('/profile', ProfileRoutes)
    app.use(router)
}


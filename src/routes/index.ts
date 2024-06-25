import { Application, Router } from "express";
import ItemsRouter from './item'
import {readdirSync} from 'fs'

// const PATH_ROUTER = `${__dirname}`

// const router = Router()

// readdirSync(PATH_ROUTER).filter(filename=>{
//     console.log(filename);
// })

export function useAPIRoutes(app: Application){
    const router = Router()
    router.use('/items', ItemsRouter)
    app.use(router)
}


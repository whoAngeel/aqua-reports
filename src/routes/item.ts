import { Request, Response, Router } from "express";

const router = Router()

router.get('/', (req:Request, res: Response)=>{
    try {
        res.send({
            data: "Aqui van los modelos"
        })
    } catch (error) {
        
    }
})

export default router
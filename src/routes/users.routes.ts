import { Router } from "express";
import { getUsers, postUser } from "../controllers/user";
import passport from "passport";

const router = Router()

router.get('/', passport.authenticate('jwt', {session:false}), getUsers)
router.post('/', postUser)


export default router
import { Router } from "express";
import { getUsers, postUser } from '../controllers/user.controller';
import passport from "passport";
import { checkRoles } from "../middlewares/auth.handler";

const router = Router()

router.get('/', passport.authenticate('jwt', {session:false}), checkRoles('admin'),getUsers)
router.post('/', postUser)


export default router
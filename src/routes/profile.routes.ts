import { Router } from "express";
import { getMyReports, getProfile, getReportsInMyArea } from "../controllers/profile.controller";
import passport from "passport";
import { checkRoles } from "../middlewares/auth.handler";

const router = Router()

router.get('/', passport.authenticate('jwt', { session: false }), checkRoles('admin', 'reporter', 'resolver'), getProfile)

router.get('/my-reports', passport.authenticate('jwt', { session: false }), checkRoles('reporter'), getMyReports)

router.get('/reports-in-my-area', passport.authenticate('jwt', { session: false }), checkRoles('resolver'), getReportsInMyArea) // TODO hacer que regrese los reportes en el area

export default router
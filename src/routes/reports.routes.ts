import { Router } from "express";
import { deleteReport, getReport, getReports, patchReportStatus, postReport } from "../controllers/reports.controller";
import passport from "passport";

 const router = Router()

 router.get('/', getReports)
 router.get('/:id', getReport)
 router.post('/', passport.authenticate('jwt', {session:false}),postReport)
 router.patch('/:id', patchReportStatus)
 router.delete('/:id', deleteReport)

 

 export default router
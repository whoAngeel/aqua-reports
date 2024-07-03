import { Router } from "express";
import { deleteReport, getReport, getReports, patchReportStatus, postReport ,postImage} from "../controllers/reports.controller";
import passport from "passport";
import multerMiddleware from "../middlewares/files.handler";

const router = Router()

router.get('/', getReports)
router.get('/:id', getReport)
router.post('/', passport.authenticate('jwt', { session: false }), multerMiddleware.single('image'),postReport) // TODO
router.post('/upload' , multerMiddleware.single('image'),postImage)
router.patch('/:id', patchReportStatus)
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteReport)



export default router
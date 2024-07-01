import multer, {diskStorage} from 'multer'

const PATH_STORAGE = `${__dirname}/../storage`
const storage = diskStorage({
    destination(req, file :Express.Multer.File, cb: any){
        cb(null, PATH_STORAGE)
    },
    filename(req, file :Express.Multer.File, cb: any){
        const ext = file.originalname.split('.').pop()
        const fileNameRandom = `image-${Date.now()}.${ext}`
        cb(null,fileNameRandom)
    }

})

const multerMiddleware = multer({storage})

export default multerMiddleware
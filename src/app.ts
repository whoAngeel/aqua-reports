import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import session from 'express-session'
import { config } from './config/config';
import { boomErrorHandler, errorHandler, logErrors, mongooseErrorHandler } from './middlewares/errorHandler'
//routers 
import { useAPIRoutes } from './routes';

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/static', express.static(__dirname + '/storage'))
app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

import './config/mongo'
import './utils/auth'

useAPIRoutes(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(mongooseErrorHandler)
app.use(errorHandler)


app.listen(config.port, () => {
    console.log(`server is running on http://localhost:${config.port}`);
})
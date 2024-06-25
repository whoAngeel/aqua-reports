import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import {config} from './config/config';
//routers 
import {useAPIRoutes} from './routes';

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

import './config/mongo'

useAPIRoutes(app)
app.listen(config.port, ()=>{
    console.log(`server is running on http://localhost:${config.port}`);
})
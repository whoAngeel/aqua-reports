import { config } from './config'
import mongoose  from 'mongoose'

mongoose.connect(<string>config.db_uri).then(() => console.log("Mongo DB connection successfully✅✅✅")).catch((err) => console.log('Error connecting to database', err.message))


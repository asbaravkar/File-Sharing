import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db'

const app = express()
dotenv.config()
connectDB()

app.use(cors())

const PORT = process.env.PORT

app.listen(PORT, ()=>console.log(`Server is listening to ${PORT}`))
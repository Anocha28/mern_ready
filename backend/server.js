const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('../backend/Config/db')
const {notFound, errorHandler} = require('../backend/Middlewares/errorMiddleware')
const authRoutes = require('./Routes/authRoutes')
const pageRoutes = require('./Routes/pageRoutes')

const app = express()
dotenv.config()
connectDB()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/auth', authRoutes)
app.use('/api/page', pageRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = 5000

app.listen(PORT, ()=>console.log(`server runing on port ${PORT}`))
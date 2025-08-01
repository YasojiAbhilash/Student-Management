require('dotenv').config()
const express = require('express')
const connectToDb = require('./database/students-db');
const studentRouter = require('./rotues/students-routes')

const app = express()

const PORT = process.env.PORT || 3000;

//connecting database
connectToDb();

//middleware 
app.use(express.json())

//router 
app.use('/api/students', studentRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

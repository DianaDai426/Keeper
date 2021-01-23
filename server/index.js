const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config();

const db = require("./db")
const noteRouter = require("./routes/note-router")

const app = express()
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use("/note", noteRouter)

app.listen(3000, () => console.log(`Server running on port ${port}`))
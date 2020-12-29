const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require("./db")
const noteRouter = require("./routes/note-router")

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req, res) => {
    console.log("hello world")
})

app.use("/api", noteRouter)

app.listen(3000, () => console.log(`Server running on port 3000`))
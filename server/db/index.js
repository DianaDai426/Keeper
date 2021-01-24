const mongoose = require('mongoose')
require('dotenv').config();


mongoose
    .connect(process.env.ALIAS_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

//get from database, notes not showing up 
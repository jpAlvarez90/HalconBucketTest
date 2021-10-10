require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const https = require('https')
const fs = require('fs')
const app = express()

const path = require('path')

const PORT = 443

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(require('./routes/index'))

// Static Content
app.use(express.static(path.join(__dirname, 'public')))
/*
https.createServer({
    cert: fs.readFileSync('server.crt'),
    key: fs.readFileSync('server.key')
}, app).listen(PORT, () => {
    console.log('Server running on port '+PORT)
})
*/

app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor ejecutandose en el puerto '+3000)
})


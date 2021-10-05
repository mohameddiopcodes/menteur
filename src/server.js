const path = require('path')
const http = require('http')

const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

app.get('/', (req, res) => {
    res.render('join')
})

app.get('/play', (req, res) => {
    res.render('index')
})

module.exports = http.createServer(app)
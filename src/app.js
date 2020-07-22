const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Define paths for Express conifg
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup hbs engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'John'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'John'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'Help message',
        phone: '09372',
        name: 'John'
    })
})

app.get('/weather', (req, res) => {
    res.send([{
        location: 'London',
        forecast: 'Rainy, 50 degree'
    }])
})

app.listen(3000, () => {
    console.log('Server is Up on port 3000')
})
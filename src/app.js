const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Helllo EXPREESS</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'John',
        age: 20
    }, {
        name: 'Web',
        age: 20
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/weather', (req, res) => {
    res.send([{
        location: 'London',
        forecast: 'Rainy, 50 degree'
    }, {
        location: 'Greenwich',
        forecast: 'Snowy, 6 degree'
    }])
})

app.listen(3000, () => {
    console.log('Server is Up on port 3000')
})




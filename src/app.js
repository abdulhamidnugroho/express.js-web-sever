const express = require('express')
const path = require('path')
const app = express()

const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

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




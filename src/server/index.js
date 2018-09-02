const express = require('express');
const os = require('os');
const data = require('../../public/data/data.json')
const app = express()

app.use(express.static('dist'))
app.get('/data', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST")
    res.send({ data })
})
app.listen(8080, () => console.log('Listening on port 8080!'))

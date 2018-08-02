const express = require('express')
const app = express()
const axios = require('axios')
const port = process.argv[2] || 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.use(express.static('public'))

app.get('')

app.get('/search', (req, res, next) => {
    const { city, country } = req.query
    axios.get()
    res.json({})
})
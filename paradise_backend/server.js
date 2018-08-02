const express = require('express')
const app = express()
const axios = require('axios')
const request = require('request')
const port = process.argv[2] || 8080

const apiKey = '-IxP22jhNAIYesa0OK8lZvKWJLjOLVfXiseq4JgfBVzGlr3QbKRjlVErQ_OhkQ2bAgtUkevXXwnZf2H_CM2n_gyg21zlZ9ut8BJRgtz-eZH9XYW7jiOUFty9LHVjW3Yx';
const client = yelp.client(apiKey);

axios.defaults.headers.common['Authorization'] = 'Bearer ' + apiKey;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.send('hello')
})

app.get('/search', (req, res, next) => {
    const { city, country } = req.query
    axios.get('https://api.yelp.com/v3/businesses/search?location=706+Mission+St,+San+Francisco,+CA,+US&term=burrito')
        .then((response) => {
            console.log(response.data)
            res.json(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
})
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.all('/test1',  (req, res) => {
 
     console.log(req)
     res.send(mockAPIResponse)
     
})
 
app.get('/test',  (req, rmodes) => {
 
    res.message
    res.send(mockAPIResponse)
     
})

app.use('/',  (req, res, next) => {
     //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
 })




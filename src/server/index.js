var path = require('path')

 const cors = require("cors");
 
 

const express = require('express')
const axios = require('axios');
const app = express()


 

 
   
app.use(express.static('dist'))
app.use(express.json())
app.use(cors())
console.log(__dirname)


 
app.post('/test2' ,  (req, res) => {

    axios.post(`http://api.meaningcloud.com/sentiment-2.1?key=1f36e4f22f8e00b893e4260d4587f32a&url=${req.body.formText}&lang=en`).then((response) => {
        res.send(response.data);

    console.log(response.data);
		console.log(response.data);
	});
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




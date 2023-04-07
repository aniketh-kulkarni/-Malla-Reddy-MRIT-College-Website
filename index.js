const express = require('express');  
const app = express(); 
const bodyParser = require('body-parser');    
const urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));   

 

app.get('/login', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
app.post('/', urlencodedParser , function (req, res) {  
   response = {  
       Username:req.body.user_name,  
       Password:req.body.password  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
app.get('/student.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "student.html" );  
}) 
app.post('/student', urlencodedParser , function (req, res) {  
   responsestu = { 
       Username:req.body.user_name,
       Password:req.body.password  
   };  
   console.log(responsestu);  
   res.end(JSON.stringify(responsestu));  
})  
const server = app.listen(8000, function () {  
  console.log("Server Started at 8000")  
}) 
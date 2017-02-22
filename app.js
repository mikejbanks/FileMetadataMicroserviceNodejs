var express = require('express')
var multer = require('multer')
var upload = multer({})


var app = express()

app.get('/',function(req,res){
	res.sendFile(__dirname+"/index.html");
})

app.post('/api/file',upload.single('userFile'), function (req, res, next){
	var fileSize=req.file.size;
	res.write('<script>alert("The File Size is: '+ JSON.stringify(req.file.size) +' Bytes");</script>');
	res.end();
})

app.listen(3000,function(){
	console.log("Listening port 3000");
})
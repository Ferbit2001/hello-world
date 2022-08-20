const express = require("express");
const app = express();

app.get('/',function(req,res){
	res.status(200).send('hello world')
})

app.listen(3000,'0.0.0.0',()=>console.log('server on'))

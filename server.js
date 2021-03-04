const express = require('express')
const fetch = require('node-fetch');
const app = express()
app.use(express.static('public'));
 
//  app.get('/cs', function(req, res){
//      res.sendFile(__dirname + '/public/index.html');
//    });
app.listen(8888, () => console.log('Example app listening on port 8888!'));
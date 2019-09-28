const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
  res.sendFile(__dirname +'/calc.html')
})

app.post('/', (req, res)=>{
  let num1 = Number(req.body.num1)
  let num2 = Number(req.body.num2)
  if(req.body.add === 'add'){
    result = num1 + num2;
    res.send('The result is ' + result);
  }else if(req.body.subtract === 'subtract'){
    result = num1 - num2;
    res.send('The result is ' + result);
  }else if(req.body.multiply === 'multiply'){
    result = num1 * num2;
    res.send('The result is ' + result);
  }else if(req.body.divide === 'divide'){
    result = num1 / num2;
    res.send('The result is ' + result);
  }
})
app.listen('3000', console.log('Listening to port 300.'))


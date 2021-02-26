const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/bmicalculator', function (req,res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/', function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send('The result is ' + result);
});

app.post('/bmicalculator', function (req, res){
  let length = parseFloat(req.body.length);
  let weight = parseFloat(req.body.weight);
  let bmi = weight / (length * length);
  res.send('Your bmi is ' + bmi);
});

app.listen(port, () => {
  console.log(`Calculator app started at ${port}`)
});

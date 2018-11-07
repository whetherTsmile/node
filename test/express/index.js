var express = require('express')
var app = express()
var router = express.Router();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/'+'index.html')
})


app.get('/download',function (req, res) {
    // res.download('app.js')
    res.write("fas")
    res.end()
});

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.listen(8080)
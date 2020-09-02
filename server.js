
const express = require('express');
const app = express();
const router = express.Router();

 app.use(function (req, res, next) {
     let time=new Date()
   let x = time.getHours()
   console.log('Time:',new Date());
 if(x<9 || x>17){
    
     res.send("<center><h1>Hello World,we are closed</h1></center>")
 }else {next();}
    

    
 });
app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');

});
app.set('view engine', 'html')
app.get('/home', function (req, res) {
    res.sendFile(__dirname+'/public/Home.html')
  })
app.listen(3000);
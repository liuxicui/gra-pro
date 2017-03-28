t express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
let User = require('./moduls/user');
mongoose.connect('mongodb://localhost:27017/react-express-demo');

let db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});
app.get('/users',function(req,res){
  User.find().exec(function(err, users) {
    res.json({users});
  })
})

app.listen(3000,function(){
  console.log('running on port 3000...');
})

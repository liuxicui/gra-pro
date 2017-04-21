var express = require('express');
var app = express();
var port = require('./config').port;
var mongoose = require('mongoose');
var uri = require('./config').uri;
var User = require('./models/user.js');
var routes = require('./routes');
var bodyParser = require('body-parser');
var morgan = require('morgan');
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', function(err){
  console.log('connection failed!', err);
});
db.once('open', function() {
  console.log('success!');
  var user = new User({
    username: 'mahe',
    password: '654321'
  });
  user.save();
});

routes(app);

app.listen(port,function(){
  console.log('running on port ' + port + '...');
})

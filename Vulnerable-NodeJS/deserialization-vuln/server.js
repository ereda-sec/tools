var express = require('express');
var cookieParser = require('cookie-parser');
var escape = require('escape-html');
var serialize = require('node-serialize');
var app = express();
app.use(cookieParser())
 
app.get('/', function(req, res) {
 if (req.cookies.profile) {
   var str = new Buffer(req.cookies.profile, 'base64').toString();
   var obj = serialize.unserialize(str);
   if (obj.username) {
     res.send("Solve this " + escape(obj.username));
   }
 } else {
     res.cookie('profile', "eyJ1c2VybmFtZSI6ImVyZWRhIiwiY291bnRyeSI6Ik5MIiwiY2l0eSI6IkFNUyJ9", {
       maxAge: 900000,
       httpOnly: true
     });
 }
 res.send("Serialize PoC");
});
app.listen(8000);
console.log("Listening on port 8000...");

var express = require("express");
var dateFormat = require('dateformat');
var app = express();
app.listen(8080);
console.log("Something awesome to happen at http://localhost:8080");

var con = require('./connect.js');

//sending email to employee after they register
con.query("SELECT e.email, a.date FROM peak.employee e join availability a on e.adid = a.adid where e.adid = 'ryg5hyd'" , function (err, result) {
if (err) throw err;
var msg = "\nThank you for participating in peak program \nYou have selected the following dates: \n";
for (var i = 0 ; i< 2; i++){
   msg +=  "\n" + dateFormat(result[i].date, "dddd, mmmm dS, yyyy");
 }
// console.log(msg);
var em = result[0].email;
var email = require('./mail_module.js')(em, msg);
email;
});

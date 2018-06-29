// const express = require('express');
// const app = express();
//
// app.get('/',(req, res) => {
//   res.send('Hello World!!!!');
//
// });
//
// app.get('/api/courses', (req, res) => {
//   res.send([1,2,3,4,5]);
// });
//
// app.get('/api/courses/:id', (req,res) => {
//   res.send(req.params.id);
// });
//
//
//
// const port = process.env.port || 3000
// app.listen(port, () => console.log(`Listening at ${port}.`));
//
//














const http = require('http');
const mysql = require('mysql');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use(morgan('short'));


app.get('/user/:id', (req, res) => {
  function getConnection() {
    return mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "!Andy0505",
      database:"peak",
      port: 3306
    });
  };

  const con = getConnection();

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  const userId = req.params.id
  const querySting = "SELECT * FROM peak.employee WHERE ADID = ?;";
  con.query(querySting, [userId], (err,result,fields) => {

    res.json(result);

  })

  con.end();
})

app.listen(8080, () => {
  console.log('Server is up on 8080');
});


app.get('/index.html', (req, res) => {
  console.log('Started retrieving Name.')
  const querySting = "SELECT * FROM peak.employee;"
  document.getElementById('button1').innerHTML = result
  getConnection.query(queryString, querySting, function (err, result, fields) {
      if (err) {
        throw err;
        console.log(result);
    }
    document.getElementById('button1').innerHTML = result;
    // console.log(result);
    res.end();
  })

});







// //Reza code
// const http = require('http');
// const mysql = require('mysql');
// const express = require('express');
// const app = express();
// const morgan = require('morgan');

// app.use(express.static('./public'));
// app.use(morgan('short'));

// const pool = mysql.createPool({

//       host: "localhost",
//       user: "root",
//       password: "!Andy0505",
//       port: 3306
// });

// //html string that will be send to browser
// var reo ='<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>{${table}}</body></html>';


// //sets and returns html table with results from sql select
// //Receives sql query and callback function to return the table
// function setResHtml(sql, cb){
//   pool.getConnection((err, con)=>{
//     if(err) throw err;

//     con.query(sql, (err, res, cols)=>{
//       if(err) throw err;

//       var table =''; //to store html table

//       //create html table with data from res.
//       for(var i=0; i<res.length; i++){
//         table +='<tr><td>'+ (i+1) +'</td><td>'+ res[i].ADID +'</td><td>'+ res[i].FirstName +'</td></tr>';
//       }
//       table ='<table border="1"><tr><th>Nr.</th><th>Name</th><th>Address</th></tr>'+ table +'</table>';

//       con.release(); //Done with mysql connection

//       return cb(table);
//     });
//   });
// }

// let sql ='SELECT * FROM peak.employee;';

// //create the server for browser access
// // const server = http.createServer((req, res)=>{
// //   setResHtml(sql, resql=>{
// //     reo = reo.replace('{${table}}', resql);
// //
// //     res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
// //     res.write(reo, 'utf-8');
// //     res.end();
// //   });
// // });

// app.get('/work', (req, res)=>{
//   setResHtml(sql, resql=>{
//     reo = reo.replace('{${table}}', resql);

//     res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//     res.write(reo, 'utf-8');
//     res.end();
//   });
// });

// app.get('/index.html', (req, res) => {
//   console.log('Started retrieving Name.')
//   setResHtml(sql, resql=>{
//     res.http.replace('{${table}}',resql)
//     res.end();
//   });

//     res.end();

// });

// app.listen(8080, ()=>{
//   console.log('Server running at //localhost:8080/');
// });

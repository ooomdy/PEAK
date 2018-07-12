const http = require('http');
const mysql = require('mysql');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./app'));
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

app.get('/state', (req, res) => {
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
  const querySting = "SELECT * FROM peak.state";
  con.query(querySting, (err,result,fields) => {

    res.json(result);

  })
  con.end();
})
//one
app.get('/preloaderIn', (req, res) => {
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

  const job = req.params.id
  const querySting = "SELECT FirstName, LastName FROM peak.registration r join peak.employee e on  r.adid = e.adid join availability a on r.adid = a.adid WHERE PositionID IN (1,2) AND Status = 0 AND Date = '2018/11/30' AND Travel = 0";
  con.query(querySting, (err,result,fields) => {

    res.json(result);

  })
  con.end();
})


// Two
app.get('/preloaderOut', (req, res) => {
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

  const job = req.params.id
  const querySting = "SELECT FirstName, LastName FROM peak.registration r join peak.employee e on  r.adid = e.adid join availability a on r.adid = a.adid WHERE PositionID IN (1,2) AND Status = 0 AND Date = '2018/11/30' AND Travel = 1 AND StateID <> 1";
  con.query(querySting, (err,result,fields) => {

    res.json(result);

  })
  con.end();
})





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


app.listen(8080, () => {
  console.log('Server is up on 8080');
});

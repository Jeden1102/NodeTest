var mysql = require('mysql');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

var con = mysql.createConnection({
  host: "mazika.mysql.dhosting.pl",
  user: "ai7coo_mazika",
  password: "Test123",
  database: "booh3k_hihahi"
});

let data;

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    data = result;

  });
});



app.get('/', (req, res) => {
  res.json({'message': data});
})

var mysql = require('mysql');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

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



const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
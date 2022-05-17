const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "aryan",
password: "aryan123",
database:"db_weather" 
})

module.exports = db;
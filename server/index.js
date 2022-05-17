const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//* Route to get all data
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM tbl_weather", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result)
    res.json(result);
  });
});

//* Route for creating the post
app.get('/api/create', (req,res)=> {

db.query(`INSERT INTO tbl_weather (temperature,humidity,rain,analogRain,uv) VALUES (42,82,"dry",3,7.5)`, (err,result)=>{
   if(err) {
   console.log(err)
   }
   console.log(result)
});   })

app.listen(3333, () => {
  console.log(`Server is running on 3333`);
});

// // Route to delete a post

// app.delete('/api/delete/:id',(req,res)=>{
// const id = req.params.id;

// db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
// if(err) {
// console.log(err)
//         } }) })
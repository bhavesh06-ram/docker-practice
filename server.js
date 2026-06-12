require('dotenv').config();
const express = require('express');
const app = express();



// Define a route handler for the homepage
app.get('/',(req,res)=>{
    res.send("hello bacho ci cd chl gaya kya ab to");
})


// Start listening for requests
app.listen(process.env.PORT,'0.0.0.0',() => {
  console.log(`Express server running at http://localhost:${process.env.PORT}/`);
});

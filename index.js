const express = require('express');
//node js doesnt have support for es 15 module so we dont use : import express from 'express';
const app = express(); //single app, most majority of projects use single app




app.get('/', (req,res)=> {
    res.send({hi:'there'});
});


const PORT =  process.env.PORT || 5000;

app.listen(PORT); //listens on localhost:5000
// express tells node, hey watch anything coming to port 5000


const { syncAndSeed, Flight } = require('./db/index.js');
const express = require('express');
const app = express();
const path = require('path')


// ------- GET/POST routes and middleware here. 

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'public')));
//app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


// Add a GET API route:

app.get('/', async (req, res, next) => {
    res.send("Hello world!")
});

app.get('/api/flights', async (req, res, next) => {
    try{
        const flights = await Flight.findAll();
        res.send(flights);
    }
    catch(error){
        next(error)
    }
});

// Individual GET API Route
app.get('/api/flights/:id', async(req, res, next) => {
    try{
        const flight = await Flight.findByPk(req.params.id);
        res.send(flight)
    }
    catch(error){
        next(error)
    }
});

// app.post()

// app.delete() 




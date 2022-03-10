const { syncAndSeed, Flight } = require('./db/index.js');
const express = require('express');
const app = express();
const path = require('path')


// ------- GET/POST routes and middleware here. 

app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });


// Add a GET API route:

app.get('/api/flights', async (req, res, next) => {
    try{
        const flights = await Flight.findAll();
        res.send(flights);
    }
    catch(error){
        next(error)
    }
})

// app.post()

// app.delete() 




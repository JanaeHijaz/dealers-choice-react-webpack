const { db, Flight, syncAndSeed } = require('./db/index.js');
const express = require('express');
const app = express();
const path = require('path');

// ------- GET/POST routes and middleware
app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.use(express.static(path.join(__dirname, 'public')));

// Add a GET API route:
app.get('/api/flights', async(req, res, next) => {
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

// POST route
app.post('/api/flights', async (req, res, next) => {
    try {
        res.status(201).send(await Flight.generateRandom())
        console.log(Flight.generateRandom())
    }
    catch(error){
        next(error)
    }
});

// DELETE route
app.delete('/api/flights/:id', async (req, res, send) => {
    try{
        const flight = await Flight.findByPk(req.params.id);
        await flight.destroy();
        res.sendStatus(204)
        }
        catch(ex){
            next(ex)
        }
}) 

// RUN syncAndSeed() and APP.LISTEN (via init) IN WHICHEVER FILE NODEMON IS WATCHING (server.js in this case)

const init = async() => {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
     app.listen(port, () => console.log(`listening on port ${port}`))
};

init();
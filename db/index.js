const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost/dealers_choice_react_webpack_flights")
const express = require('express');
const app = express();


const Flight = db.define('flight', {
    flightNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { notEmpty: true} 
    }, 
    time: {
        type: Sequelize.TIME,
        defaultValue: '00:00:00',
        field: 'hour'
      },
    origin: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true}
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true}
    }
});


// generate random flight:
Flight.generateRandom = function () {
    return this.create({flightNumber:`${Math.ceil(Math.random()* 9000)}`})
}


const syncAndSeed = async() => {
    try { 
     await db.sync({force: true});
     await Flight.create({flightNumber: 8080, time: '08:00:00', origin: 'New York City' , destination: 'Denmark'});
     await Flight.create({flightNumber: 3040, time: '12:30:00', origin: 'Sao Paulo' , destination: 'London'});
     await Flight.create({flightNumber: 7876, time: '10:45:00', origin: 'Boston' , destination: 'Cleveland'});
     await Flight.create({flightNumber: 9907, time: '02:00:00', origin: 'New Delhi' , destination: 'Tokyo' });
     await Flight.create({flightNumber: 4004, time: '04:00:00', origin: 'Los Angeles' , destination: 'Riyadh'});
     await Flight.create({flightNumber: 5887, time: '11:50:00', origin: 'Paris' , destination: 'Versailles'});
     await Flight.create({flightNumber: 1224, time: '05:20:00', origin: 'Miami' , destination: 'Mexico City'})

     // THIS SHOULDNT GO HERE!! But why not? 
     //const port = process.env.PORT || 3000;
     //app.listen(port, () => console.log(`listening on port ${port}`))
    }
    catch(ex){
        console.log(ex)
    }
}
//syncAndSeed();


module.exports = {
    db,
    Flight, 
    syncAndSeed
}
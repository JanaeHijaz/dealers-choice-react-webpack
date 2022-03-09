const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost/dealers_choice_react_albums", { logging: false })

const Albums = db.define('album', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true} 
    },
    releaseDate: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true}
    },
    artistName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true}
    },
    albumURL: {
        type: Sequelize.STRING,
      }
});

const syncAndSeed = async() => {
    await db.sync({force:true})
Albums.create({name: , releaseDate: , artistDate: , albumURL: })
Albums.create({name: , releaseDate: , artistDate: , albumURL: })
Albums.create({name: , releaseDate: , artistDate: , albumURL: })
Albums.create({name: , releaseDate: , artistDate: , albumURL: })
Albums.create({name: , releaseDate: , artistDate: , albumURL: })
Albums.create({name: , releaseDate: , artistDate: , albumURL: })
Albums.create({name: , releaseDate: , artistDate: , albumURL: })


}

module.exports = {

}
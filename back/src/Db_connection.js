require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
    //'postgres://postgres:1234@localhost:5432/rickandmorty',
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: true, 
     native: false,
     alter: true,
     force:false
   }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

 FavoriteModel(sequelize);
 UserModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User, Favorite } = sequelize.models;
 User.belongsToMany(Favorite, {through:'user_favorite'});
 Favorite.belongsToMany(User, {through:'user_favorite'});

module.exports = {
    User,
   Favorite,
   conn: sequelize,
};
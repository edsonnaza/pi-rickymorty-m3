//const getCharById = require('../controller/getCharById');
const {login} = require('../controller/user/login');
const {postFav} = require('../controller/favorite/postFav');
const {deleteFav} = require('../controller/favorite/deleteFav');
const {postUser} = require('../controller/user/postUser');
const {UserModel} = require('../models/User');
const {User} =require('../Db_connection');
const { getAllUsers } = require('../controller/user/getAllUsers');


const {Router} = require('express');
const { getAllFavorites } = require('../controller/favorite/getAllFavorites');

const router = Router();
router.get('/', function (req, res) {
    //Ruta para un GET a /
    res.send('Hola mundo de Ricky and Morty!'); // response "Hola mundo!" en la pagina principal
 });

  
// User Route
router.get('/user/pagination',getAllUsers);
router.post('/user',postUser);

// Login Route
router.get('/login',login);

// Favorite Route
router.get('/fav',getAllFavorites);
router.post('/fav',postFav);
router.delete('/fav/:id',deleteFav);

module.exports = router;
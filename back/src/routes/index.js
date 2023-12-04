//const getCharById = require('../controller/getCharById');
const {login} = require('../controller/user/login');
const {postFav} = require('../controller/favorite/postFav');
const {deleteFav} = require('../controller/favorite/deleteFav');
const {postUser} = require('../controller/user/postUser');
const {UserModel} = require('../models/User');
const {User} =require('../Db_connection');
const { getAllUsers } = require('../controller/user/getAllUsers');


const {Router} = require('express');

const router = Router();
router.get('/', function (req, res) {
    //Ruta para un GET a /
    res.send('Hola mundo de Ricky and Morty!'); // response "Hola mundo!" en la pagina principal
 });

 router.post('/test', async (req, res) => {
    //console.log(req.body);
    const { email, password } = req.body;
    res.json(email);
    try {
      const user = await UserModel.create({
        email,
        password,
       
      });
      res.json(user);
    } catch (error) {
      res.send(error);
    }
  })

  router.post('/players', async (req, res) => {
    res.send(req.body);
    // const { firstName, lastName, username, birthday, status, skill, password } = req.body;
    // try {
    //   const newPlayer = await Player.create({
    //     firstName,
    //     lastName,
    //     username,
    //     birthday,
    //     status,
    //     skill,
    //     password
    //   });
    //   res.json(newPlayer);
    // } catch (error) {
    //   res.send(error);
    // }
  });
//router.get('/character/:id',getCharById);

// router.get('/user/pagination', async (req, res) => {
//     const players = await User.findAll(req.query);
//     res.json(players.length ? players : 'No players found');
//   });

router.get('/user/pagination',getAllUsers);

router.post('/user',postUser);
 
router.get('/login',login);
router.post('/fav',postFav);
router.delete('/fav/:id',deleteFav);

module.exports = router;
const { Favorite } = require('../../Db_connection');

const postFav = async (req, res)=> {
  const {id, name, origin, status, image, species, gender } = req.body;

  if (!id || !name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send('There is empty data yet, please try again!');
  }

  try {
    await Favorite.findOrCreate({
      where: { name },
      defaults: {
        id,
        origin,
        status,
        image, 
        species,
        gender
      }
    });

    const favorites = await Favorite.findAll();
    return res.json(favorites);

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = { 
  postFav
};
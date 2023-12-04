const {Favorite} =require('../../Db_connection');

const getAllFavorites = async (req, res) => {
    const favorites = await Favorite.findAll(req.query);
    res.json(favorites.length ? favorites : 'No favorites found');
  };

  module.exports = { getAllFavorites};
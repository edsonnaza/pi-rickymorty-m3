const { Favorite } = require('../../Db_connection');

const deleteFav= async (req, res) =>{
    const { id } = req.params;
  
    try {
      await Favorite.destroy({ where: { id }});
      
      const favorites = await Favorite.findAll();
      return res.json(favorites);
  
    } catch (error) {
      return res.status(500).send(error.message); 
    }
  }
  
  module.exports = {
    deleteFav  
  };
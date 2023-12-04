const {User} =require('../../Db_connection');

const getAllUsers = async (req, res) => {
    const players = await User.findAll(req.query);
    res.json(players.length ? players : 'No players found');
  };

  module.exports = { getAllUsers };
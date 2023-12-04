const {User} =require('../../Db_connection');
 const login= async (req, res) =>{
    const { email, password } = req.query;
     
    if (!email || !password) {
      return res.status(400).send('Faltan datos');
    }
  
    try {
      const user = await User.findOne({ where: { email }});
  
      if (!user.email) {
        return res.status(404).send(`Usuario no encontrado: ${user.email}`);
      }
  
      if (user.password !== password) {
        return res.status(403).send(`Contraseña incorrecta: ${user.password}`);
      }
  
      return res.json({ access: true });
  
    } catch (error) {
      return res.status(500).send(error.message); 
    }
  }
  
  module.exports = { login };
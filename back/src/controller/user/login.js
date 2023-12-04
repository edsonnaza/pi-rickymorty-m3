const {User} =require('../../Db_connection');
const bcrypt = require('bcrypt');
 const login= async (req, res) =>{
    const { email, password } = req.query;
     
    if (!email || !password) {
      return res.status(400).send(`Please provide and email:${email} and password.`);
    }
  
    try {

      const user = await User.findOne({ where: { email }});
  
      if (!user) {
        return res.status(404).send(`Email not registered: ${email}!`);
      }
  
   
      
      const match = await bcrypt.compare(password, user.password);

      if(!match){
        return res.status(400).send('Invalid password');
      }

      return res.json({ access: true });
  
    } catch (error) {
      return res.status(500).send(error.message); 
    }
  }
  
  module.exports = { login };
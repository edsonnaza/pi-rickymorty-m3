const {User} =require('../../Db_connection');
const bcrypt = require('bcrypt');

const postUser = async (req, res)=> {
    const { email, password } = req.body;
    
  
    if (!email || !password) {
      return res.status(400).send(`Faltan datos, email: ${req.body.email} o password:${password}`); 
    }
  
    try {
      const saltRounds =10;
      const hashedPassword = await bcrypt.hash(password,saltRounds);
      if(!hashedPassword) res.status(500).res(`Error with hashed password ${hashedPassword}`);

      const user = await User.create({
        id:null,
        email, 
        password: hashedPassword
      });
  
      return res.status(201).json(user);
  
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  
  module.exports = { postUser };

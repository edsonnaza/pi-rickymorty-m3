const users = require('../utils/users');

const login =(req,res)=>{
    console.log('login.js...')
    const {email,password}=req.query;
    const userValid= users.find((user)=>{
     return   user.email === email &&
        user.password === password
    })

    if (userValid){
        return res.json({access: true, email,password});
    }
        return res.json({access: false, users});

}

module.exports = login;
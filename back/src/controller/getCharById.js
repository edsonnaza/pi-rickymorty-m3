
 const axios = require('axios');
 const API_KEY='pi-edsonnaza';
 const URL = `https://rym2.up.railway.app/api/character/`;

 const getCharById = (req, res)=>{
    
    const id = Number(req.params.id);
    axios(`${URL}${id}?key=${API_KEY}`).then(({data})=>{
        const character = {name,status,gender,species,origin,image};

        return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Data not found");

    })
    .catch((error)=>{
        res.status(500).json({error:error.message})
    });
 };
 module.exports=getCharById;
 
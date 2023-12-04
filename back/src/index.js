const server = require('./app');
const { conn } = require('./Db_connection');
const PORT = 3005;

// Sincronizamos sequelize antes de levantar el servidor 
conn.sync()
  .then(() => {
    console.log('Database connected successfully!');  
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(PORT, () => {
  console.log('Server runing in port: ' + PORT); 
});
const server = require('./app');
const PORT = 3005;

server.listen(PORT, () => {
   console.log('Server runing in port: ' + PORT);
});
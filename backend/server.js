const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000
const connectToDB = require('./DataBase/db')

const server = http.createServer(app);

server.listen(port, () => {
  connectToDB()
  console.log(`server listening on port ${port}`)
});
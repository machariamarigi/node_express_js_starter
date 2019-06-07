import express from 'express';
import bodyParser from 'body-parser';

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

export default server;

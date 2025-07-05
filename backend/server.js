const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = require('./app');
const PORT = 5000;

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use('/api', app);
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
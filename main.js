const express = require('express');
const connectToDatabase = require('./database/db');
const routes = require('./routes/index');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/api/v1', routes.router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server listening on port'.blue, PORT.toString().green);
});

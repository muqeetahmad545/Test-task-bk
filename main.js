const express = require('express');
const connectToDatabase = require('./database/db');
const routes = require('./routes/index');
const dotenv = require('dotenv');  

dotenv.config();  

connectToDatabase();  
const app = express();

app.use(express.json());
app.use('/api/v1', routes.router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

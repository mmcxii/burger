const express = require('express');
const burgers = require('./controllers/burgers_controller');

const app = express();
const PORT = process.env.PORT || 3000;

//* Middleware
app.use(express.json());

//* API Routes
app.use('/api/burgers', burgers);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));

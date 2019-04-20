const express = require('express');
const app = express();
const usersRoute = require('./api').users;

app.use(express.json());
//use users route for api/users
app.use('/api/users', usersRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

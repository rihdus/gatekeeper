const express = require('express');

let userRoute = express.Router();

userRoute.post('/register', async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const user = usersStore.find(o => o.username === username);
  if (user) res.status(422).send('Username is already taken.');
  else {
    const newUser = { username, password, firstName, lastName };
    usersStore.push(newUser);
    res.status(201).send(JSON.stringify(newUser));
  }
});

userRoute.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userIndex = usersStore.findIndex(o => o.username === username);
  if (userIndex >= 0 && usersStore[userIndex].password === password) {
    return res.sendStatus(204);
  } else {
    return res.status(403).send(
      JSON.stringify({
        errorCode: 'AUTH_USERNAME_OR_PASSWORD_NOT_VALID',
        message: 'Invalid Credentials',
      })
    );
  }
});

const usersStore = [];

module.exports = userRoute;

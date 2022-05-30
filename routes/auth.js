const authRouter = require('express').Router();
const User = require('../models/user');

authRouter.post('/checkCredentials', (req, res) => {
  const { email, password } = req.body;
  let validationErrors = null;
  User.findByEmail(email).then((user) => {
    if (!user) {
      res.status(401).send('Invalid credentials');
    } else {
      User.verifyPassword(password, user.hashedPassword).then(
        (correctPassword) => {
          if (correctPassword) {
            res.status(200).send('Your credential are correct');
          } else {
            res.status(401).send('Invalid credentials');
          }
        }
      );
    }
  });
});

module.exports = authRouter;

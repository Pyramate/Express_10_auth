const User = require('./models/user');

User.hashPassword('coucouHib@@!').then((hashedPassword) => {
  console.log(hashedPassword);
});

User.verifyPassword(
  'coucouHib@@!',
  '$argon2id$v=19$m=65536,t=5,p=1$M+3VJ4O21HVAzhqstti7Sg$zZ+t8zDxSaZmYZzLOHAuN1p7xdnW9LD2OqjGXM0pQYg'
).then((passwordIsCorrect) => {
  console.log(passwordIsCorrect);
});

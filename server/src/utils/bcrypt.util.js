const bcrypt = require('bcrypt');
const salt = 5

const createHash = async ({ username, password }) => {
  const payload = username + password;

  return bcrypt.hash(payload, salt)
}

const verifyHash = async ({ username, password }, hash) => {
  const payload = username + password;

  return bcrypt.compare(payload, hash);
}

module.exports = {
  createHash,
}
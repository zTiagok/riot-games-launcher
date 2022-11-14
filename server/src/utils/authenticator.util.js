require('dotenv').config();

const JWT = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const createToken = async ({ username, password }) => {
  const object = {
    username,
    password
  };

  return JWT.sign(object, SECRET)
};

const verifyToken = async () => {

};

module.exports = {
  createToken,
  verifyToken,
}
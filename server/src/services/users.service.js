const { Users } = require('../models');
const hashCode = require('../utils/bcrypt.util');
const usersValidations = require('../validations/users.validation');

const retrieveAllUsers = async () => {
  const result = await Users.findAll();

  return { type: null, message: result }
};

const insertNewUser = async (body) => {
  const validation = usersValidations.validateBody(body);

  if (validation.type) {
    return validation;
  }

  const hasUser = await Users.findOne({
    where: {
      username: body.username,
    }
  })
  
  if (hasUser) {
    return { type: 'BAD_REQUEST', message: 'User already exists' }
  }
  
  const hash = await hashCode.createHash(body);

  const result = await Users.create({
    username: body.username,
    password: hash,
  });

  return { type: null, message: result }
};

module.exports = {
  retrieveAllUsers,
  insertNewUser,
}
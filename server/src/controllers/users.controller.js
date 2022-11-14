const errorMap = require("../utils/errorMap.util");
const UsersServices = require('../services/users.service');

const retrieveAllUsers = async (req, res) => {
  const { type, message } = await UsersServices.retrieveAllUsers();

  if (type) {
    return res.status(errorMap(type)).json({ message });
  }

  return res.status(200).json(message)
};

const insertNewUser = async (req, res) => {
  const { body } = req;
  const { type, message } = await UsersServices.insertNewUser(body);

  if (type) {
    return res.status(errorMap(type)).json({ message });
  }

  return res.status(201).json({ message: 'User created successfully' })
};


module.exports = {
  retrieveAllUsers,
  insertNewUser,
}
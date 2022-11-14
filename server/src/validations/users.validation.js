const validateBody = (body) => {
  const requiredKeys = ['username', 'password'];

  const hasKeys = requiredKeys.every((key) => key in body)

  if (!hasKeys) {
    return { type: 'BAD_REQUEST', message: '"username" or "password" missing' }
  }

  if (body.username.length < 6 || body.password.length < 8) {
    return { type: 'BAD_REQUEST', message: '"username" or "password" invalid length' }
  }

  return { type: null, message: null }
}

module.exports = {
  validateBody,
}
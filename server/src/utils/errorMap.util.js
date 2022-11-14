const map = {
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
}

module.exports = (type) => map[type] || 500;

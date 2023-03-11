const jwt = require("jsonwebtoken");
const {
  TOKEN_EXPIRE_TIME,
  REFRESH_TOKEN_EXPIRE_TIME,
  JWT_SECRET,
} = require("../../../constants");

const createJWT = (payload, isRefreshToken) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: isRefreshToken ? REFRESH_TOKEN_EXPIRE_TIME : TOKEN_EXPIRE_TIME,
  });
};

const verifyJWT = (token) => {
  let decodedJWT;
  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (!error) {
      decodedJWT = decoded;
    }
  });
  return decodedJWT;
};

module.exports = {
  createJWT,
  verifyJWT,
};

const TOKEN_EXPIRE_TIME = "1d";
const REFRESH_TOKEN_EXPIRE_TIME = "7d";

const JWT_SECRET = "superSecret";

const SERVICE_URLS = {
  AUTH: "localhost:5001",
  USER: "localhost:5002",
};

module.exports = {
  TOKEN_EXPIRE_TIME,
  REFRESH_TOKEN_EXPIRE_TIME,
  JWT_SECRET,
  SERVICE_URLS,
};

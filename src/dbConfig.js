require('dotenv').config();

module.exports = {
  port: process.env.PORT || 8080,
  dbConfig: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB,
    port: process.env.DB_PORT,
  },
  jwt_secret: process.env.JWT_TOKEN_SECRET,
};

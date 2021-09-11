const PORT =  process.env.PORT || 1337;

module.exports = exports = {
  APP_NAME: 'Heroku Parse',
  APP_ID: process.env.APP_ID ||'MSP-Test',
  MASTER_KEY: process.env.JS_KEY ||'a-super-secret-master-key1',
  PORT: PORT,
  SERVER_URL: process.env.SERVER_URL || `http://localhost:${PORT}`,
  PSERVER_URL: process.env.PSERVER_URL || `http://localhost:${PORT}`,
  DATABASE_URL: process.env.DATABASE_URL + '?sslmode=require' || 'postgres://parse:parse@localhost:5432/parse',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/parse'
};

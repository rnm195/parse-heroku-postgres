/**
 * Created by championswimmer on 16/07/17.
 */
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const PARSE_CONFIG = require('../parse-config');

const express = require('express');
const app = express();

const parsePgServer = new ParseServer({
  databaseURI: PARSE_CONFIG.DATABASE_URL,
  appId: PARSE_CONFIG.APP_ID,
  serverURL: `${PARSE_CONFIG.SERVER_URL}/pg`,
  masterKey: PARSE_CONFIG.MASTER_KEY
});

const parseDashboard = new ParseDashboard({
  apps: [
    {
      serverURL: `${PARSE_CONFIG.PSERVER_URL}/pg`,
      appId: PARSE_CONFIG.APP_ID,
      masterKey: PARSE_CONFIG.MASTER_KEY,
      appName: PARSE_CONFIG.APP_NAME + ' PostgreSQL'
    },
    {
      serverURL: 'https://pse-robin.herokuapp.com/parse',
      appId: PARSE_CONFIG.APP_ID,
      masterKey: PARSE_CONFIG.MASTER_KEY,
      appName: PARSE_CONFIG.APP_NAME + ' PSE pg'
    }
  ],
  users: [
    {user: 'parse', pass: '$2a$12$XHzIm4HV5WYgVJn9SVSwu.C0mPRrU3reqlyBZ8iE6lRisaV/.xdoW'}
  ],
  useEncryptedPasswords: true,
  trustProxy: 1
});

app.use('/pg', parsePgServer);
app.use('/dashboard', parseDashboard);

module.exports = exports = app;

/**
 * Created by championswimmer on 16/07/17.
 */
const app = require('./src/server');
const PARSE_CONFIG = require('./parse-config');

app.listen(PARSE_CONFIG.PORT, () => {
  console.info(
    `
    Parse server and dashboard running - 
    Postgres-based Parse API : http://localhost:${PARSE_CONFIG.PORT}/pg
    Dashboard                : http://localhost:${PARSE_CONFIG.PORT}/dashboard
    
     `);
  console.info(`DB URL : ${PARSE_CONFIG.DATABASE_URL}`);
});

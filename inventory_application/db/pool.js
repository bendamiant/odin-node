const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/inv_app`
});
const Pool =require("pg").Pool;
require("dotenv").config();
const offline_config = {
    user: process.env.PG_user,
    host:  process.env.PG_host,
    database:  process.env.PG_database,
    password:  process.env.PG_password,
    port: process.env.PG_port
};
const production_config={
    connectionString:process.env.Database_URL
};
const pool = new Pool( process.env.NODE_END === "production" ? production_config: offline_config);
module.exports= pool;
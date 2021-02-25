const Pool =require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "123456",
    port: "6969"
});
module.exports=pool;
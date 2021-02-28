const Pool =require("pg").Pool;
const devconfig = {
    user: "postgres",
    host: "localhost",
    database: "data_base",
    password: "123456",
    port: "5432"
}
const proconfig = {
    connectionString: process.env.DATABASE_URL
}
const pool = new Pool(
    process.env.NODE_ENV === "production" ? proconfig:devconfig
);
module.exports=pool;
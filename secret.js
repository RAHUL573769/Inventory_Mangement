require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const dataBase = process.env.DATABASE_ACCESS;
module.exports = { PORT, dataBase };

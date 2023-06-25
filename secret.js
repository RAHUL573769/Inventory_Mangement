require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const dataBase = process.env.DATABASE_ACCESS;
console.log(dataBase);
module.exports = { PORT, dataBase };

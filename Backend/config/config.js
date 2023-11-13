const dotenv = require('dotenv').config();

const PORT = process.env.PORT;
const MONGO = process.env.CONNECT;


module.exports = {
    PORT,
    MONGO
}
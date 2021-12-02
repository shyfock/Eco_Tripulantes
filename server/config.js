const dotenv = require("dotenv").config()

module.exports = {
    NODE_ENV: proces.env.NODE_ENV || "development",
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 9000,
    DB: process.env.DB || "mongodb://localhost:27017/ecoDB"
}
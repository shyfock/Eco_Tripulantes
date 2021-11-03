const mongoose = require("mongoose");
const host = "localhost";
const port = "27017";
const db = "ecoDB";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "MongoDB connection error"))
    dbConnection.once("open", () => {
        console.log("DB - OK! in port: " + `${host}:${port}`);
    })
}
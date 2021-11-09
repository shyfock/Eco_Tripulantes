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
    dbConnection.once("connected", () => {
        console.log("DB - OK! on port: http://" + `${host}:${port}`);
    })
}
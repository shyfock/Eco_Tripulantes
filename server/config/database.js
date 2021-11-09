const mongoose = require("mongoose");
const host = "localhost";
const port = "27017";
<<<<<<< HEAD
const db = "ecoDB";
=======
const db = "hr";
>>>>>>> 97596be (Rebase client sobre main)

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "MongoDB connection error"))
<<<<<<< HEAD
    dbConnection.once("connected", () => {
        console.log("DB - OK! on port: http://" + `${host}:${port}`);
=======
    dbConnection.once("open", () => {
        console.log("DB - OK! in port: " + `${host}:${port}`);
>>>>>>> 97596be (Rebase client sobre main)
    })
}
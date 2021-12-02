const mongoose = require("mongoose");
const host = "localhost";
const port = "27017";
const db = "ecoDB";
const collection = "avatar";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    let gfs;
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "MongoDB connection error"))
    dbConnection.once("connected", () => {
        console.log("DB - OK! on port: http://" + `${host}:${port}`);
    })
}

exports.dbConfig = {
    url:`mongodb://${host}:${port}/${db}`,
    collection: `${collection}`,
};
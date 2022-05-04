// connect to mongo database

debug = require("debug")("mongo:model");
const mongo = require("mongoose");
let db = mongo.createConnection();
(async () => {
    try {
        await db.openUri('mongodb://localhost:27017/myfirstdatabase');
    } catch (err) {
        debug("An error occurred while connecting to DB: " + err);
    }
})();
debug('Pending DB connection');
require("./user_model")(db);
require("./poster_model")(db);
module.exports = model => db.model(model);
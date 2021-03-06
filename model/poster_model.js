const mongo = require("mongoose");

module.exports = db => {

    let schema = new mongo.Schema({
        source: String,
        description: String,
        creation_date: Date
    });


    schema.statics.GET_ALL = async function() {
        return this.find({}).exec();
    };

    schema.statics.ADD = async function(poster) {
        return this.create({
            source: poster[0], description: poster[1], creation_date: poster[2]
        });
    };

    db.model('Poster', schema);
};
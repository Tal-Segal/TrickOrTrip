const mongo = require("mongoose");

module.exports = db => {

    let schema = new mongo.Schema({
        username: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['admin', 'employee', 'customer'], default: 'customer' },
        image:  String,
        start_date: Date,
        isValid: Boolean
    });


    schema.statics.GET_ALL = async function() {
        // check validity
        return this.find({}).filter(user => user.isValid === true);
    };

    schema.statics.ADD = async function(user) {
        return this.create({
            username: user[0], password: user[1], role: user[2], image: user[3], start_date: Date.now(), isValid: true
        });
    };

    schema.statics.DELETE = async function (id) {
        //return this.findByIdAndDelete(id);

        // check validity
        return this.findByIdAndUpdate(id, { isValid: false });
    };

    schema.statics.EDIT = async function (id, args) {
        return this.findByIdAndUpdate(id, args);
    };

    schema.statics.GET_BY_USERNAME = async function (username) {
        return this.where('username', username);
    };

    db.model('User', schema);
};
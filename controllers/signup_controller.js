const service = require("../services/management_service.js");

const signup = async (req, res) => {

    let body = req.body;
    let user = [body.username, body.password, 'customer', body.image];

    let newUser = await service.addUser(user);

    if (typeof newUser !== "string") {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}

module.exports = {
    signup
};
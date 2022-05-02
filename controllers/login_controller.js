const service = require("../services/management_service.js");

const login = async (req, res) => {

    let users = await service.getUsers();
    const userExist=(user)=>user.username === req.body.username && user.password === req.body.password
        && user.isValid === 'yes';
    //console.log(users.some(userExist));
    if(users.some(userExist))
    {
        res.sendStatus(200);
    }
    else
    {
        res.sendStatus(404);
    }
}

module.exports = {
    login
};
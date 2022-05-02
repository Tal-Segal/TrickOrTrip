const service = require("../services/management_service.js");

const getAllUsers = async (req, res) => {
    res.json(await service.getUsers());
}

const addUser = async (req, res) => {
    let body = req.body;
    let user = [body.username, body.password, body.role, body.image];
    await service.addUser(user);
}

const editUser = async (req, res) => {
    let params = req.params;
    let user = await service.getUserByUsername(params.username);
    await service.editUser(user._id, { role: params.role });
}

const deleteUser = async (req, res) => {
    let body = req.body;
    let imageUrl = req.file ? 'images/' + req.file.filename : body.source;
    let poster = [imageUrl, body.text, body.creation_date];
    await service.deleteUser(poster);
}

const getManagementView = (req, res) => {
    res.render("management");
}


module.exports = {
    getAllUsers,
    addUser,
    editUser,
    deleteUser,
    getManagementView
};
const debug = require("debug");
const model = require('../model')('User');

async function getUsers() {
    try {
        return await model.GET_ALL();
    } catch (err) {
        debug(`Error getting users: ${err}`);
    }
}

async function addUser(user) {
    try {
        return await model.ADD(user);
    } catch (err) {
        debug(`Error adding a user: ${err}`);
    }
}

async function editUser(id, args) {
    try {
        return await model.EDIT(id, args);
    } catch (err) {
        debug(`Error editing a user: ${err}`);
    }
}

async function deleteUser(id) {
    try {
        return await model.DELETE(id);
    } catch (err) {
        debug(`Error deleting a user: ${err}`);
    }
}

async function getUserByUsername(username) {
    try {
        let user = await model.GET_BY_USERNAME(username);
        return user === [] ? undefined : user[0];
    } catch (err) {
        debug(`Error getting user by username: ${err}`);
    }
}

module.exports = {
    getUsers,
    addUser,
    editUser,
    deleteUser,
    getUserByUsername
}
const { getUserData, editUserData, deleteUserData } = require("../../models/users.models");

const getUser = (req, res) => {
    const data = req.params['id'];
    res.status(200).json(getUserData(data));
}

const updateUser = (req, res) => {
    const data = req.body;
    res.status(200).json(editUserData(data))
}

const deleteUser = (req, res) => {
    const data = req.params['id'];
    res.status(204).json(deleteUserData(data))
}

module.exports = {
    getUser,
    updateUser,
    deleteUser,
}
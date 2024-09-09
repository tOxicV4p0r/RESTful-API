const { editPassword, createUser } = require("../../models/auth.model");

const register = (req, res) => {
    const data = req.body;
    return res.status(201).json(createUser(data));
}

const changePassword = (req, res) => {
    const data = req.body;
    return res.status(200).json(editPassword(data));
}

module.exports = {
    register,
    changePassword,
}
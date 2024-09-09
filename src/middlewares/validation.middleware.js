const { validationResult } = require("express-validator");

const validationMiddleware = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        const messages = err.array().map(err => err.msg);
        return res.status(400).json({ errors: messages });
    }

    next();
}

module.exports = {
    validationMiddleware,
}
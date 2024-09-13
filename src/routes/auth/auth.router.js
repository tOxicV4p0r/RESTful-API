const express = require('express');
const { register, changePassword } = require('./auth.controller');
const { validationMiddleware } = require('../../middlewares/validation.middleware');
const { registerValidation, passwordChangeValidation } = require('../../utils/validationHelper');

const authRouter = express.Router();

authRouter.post('/register', registerValidation, validationMiddleware, register);
authRouter.put('/change-password', passwordChangeValidation, validationMiddleware, changePassword);

module.exports = authRouter;
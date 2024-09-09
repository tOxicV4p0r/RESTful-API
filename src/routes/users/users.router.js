const express = require('express');
const { authMiddleware } = require('../../middlewares/auth.middleware');
const { getUser, updateUser, deleteUser } = require('./users.controller');
const { userParamValidation } = require('../../utils/validationHelper');
const { validationMiddleware } = require('../../middlewares/validation.middleware');

const usersRouter = express.Router();

usersRouter.get('/', userParamValidation, validationMiddleware);
usersRouter.get('/:id', authMiddleware, getUser);

usersRouter.put('/', userParamValidation, validationMiddleware);
usersRouter.put('/:id', authMiddleware, updateUser);

usersRouter.delete('/', userParamValidation, validationMiddleware);
usersRouter.delete('/:id', authMiddleware, deleteUser);

module.exports = usersRouter;
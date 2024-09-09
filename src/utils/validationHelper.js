const { check, query, param } = require("express-validator");

const registerValidation = [
    check('email').isEmail().withMessage('Email is invalid'),
    check('password').isLength({ min: 8 }).withMessage('Password mush be at least 8 characters'),
    check('name').notEmpty().withMessage('Name is required'),
    check('dateOfBirth').isDate().withMessage('Invalid date'),
    check('gender').isIn(['male', 'female', 'other']).withMessage('Gender is invalid'),
    check('address').notEmpty().withMessage('Address is required'),
    check('subscribeNewsletter').isIn([true, false]).withMessage('Subscribe is invalid'),
];

const passwordChangeValidation = [
    check('currentPassword').notEmpty().withMessage('Current password is required'),
    check('newPassword').isLength({ min: 8 }).withMessage('New password mush be at least 8 characters'),
    check('confirmPassword').custom((value, { req }) => value === req.body.newPassword).withMessage('Password confirmation does not match'),
];

const userParamValidation = [
    param('id').notEmpty().withMessage('User ID is required'),
]

module.exports = {
    registerValidation,
    passwordChangeValidation,
    userParamValidation,
}
const createUser = (data) => {
    return { message: 'Registered successfully' };
}

const editPassword = (data) => {
    return { message: 'Password changed successfully' };
}

module.exports = {
    createUser,
    editPassword
}
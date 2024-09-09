const getUserData = (id) => {
    return {
        email: 'hello@test.com',
        name: 'kraisorn',
        age: 17,
        gender: 'male',
        subscribeNewsletter: true,
    };
}

const editUserData = () => {
    return {
        message: 'Updated successfully',
    };
}

const deleteUserData = (id) => {
    return {
        message: 'Deleted successfully',
    };
}

module.exports = {
    getUserData,
    editUserData,
    deleteUserData,
}
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader === 'Bearer faketoken_user1') {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }

}

module.exports = {
    authMiddleware,
}
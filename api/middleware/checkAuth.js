let authorized = true;

module.exports = (req, res, next) => {
    authorized ? next() : res.status(403).json({ message: 'You are unauthorized!' });
};
const router = require('express').Router();

// custom middleware
const checkAuth = require('./middleware/checkAuth.js');

// import routers
const loginRouter = require('../routes/auth/login-router.js');
const registerRouter = require('../routes/auth/register-router.js');

// /api
router.use('/register', registerRouter);
router.use('/login', loginRouter);


router.get('/', checkAuth, (req, res) => {
    res.json({ message: 'Api is running.' });
});

module.exports = router;
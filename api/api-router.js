const router = require('express').Router();

// custom middleware


// import routers
const loginRouter = require('../routes/auth/login-router.js');
const registerRouter = require('../routes/auth/register-router.js');

// /api
router.use('/register', registerRouter);
router.use('/login', loginRouter);


router.get('/', (req, res) => {
    res.send('<h1>Api is running.</h1>');
});

module.exports = router;
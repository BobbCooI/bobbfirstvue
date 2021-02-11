var router = require('express').Router();
const authService = require('./authControl.js');
// split up route handling
router.use('/login', authService.login);
router.use('/register', authService.register);
router.use('/userCheck', authService.userCheck);
// etc.

module.exports = router;
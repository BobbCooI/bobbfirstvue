 const router = require('express').Router();
const dev = require('./devs.js');
// split up route handling
router.use('/devs', dev.getDevs);
// etc.

module.exports = router;
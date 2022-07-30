const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchRoute = require('./search');

router.use('/users', userRoutes);
router.use('/search', searchRoute);

module.exports = router;

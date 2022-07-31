const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchRoute = require('./search');
const randomRoute = require('./randomRecipe');

router.use('/users', userRoutes);
router.use('/search', searchRoute);
router.use('/random', randomRoute);

module.exports = router;

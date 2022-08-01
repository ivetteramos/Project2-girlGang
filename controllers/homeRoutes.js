const router = require('express').Router();
const { User, FavoriteRecipe } = require('../models');
const withAuth = require('../utils/auth');
      // Eventually, your application will query into the recipe API and get some form of response
      // This will probably be an array of objects where each object is a recipe
      // you'll pass that array here in this object

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;

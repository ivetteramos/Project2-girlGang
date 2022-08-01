const router = require('express').Router();
const { User, FavoriteRecipe } = require('../models');
const withAuth = require('../utils/auth');
const axios = require("axios");

router.get('/', withAuth, async (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
      params: { tags: '', number: '1' },
      headers: {
          'X-RapidAPI-Key': 'a2608e4aa8msh80167ba33d588fep1bf1a9jsn104b238f5b4a',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
  };

  axios.request(options).then(function (response) {
      console.log(response.data);
      res.render('homepage', {
       
        recipes: response.data.recipes,
          
        logged_in: req.session.logged_in,
      });
  }).catch(function (error) {
      console.error(error);
      res.status(500).json(err);
  });

  
})
router.get('/', (req, res) =>{
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

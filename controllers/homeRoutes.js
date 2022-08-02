const router = require('express').Router();
const { User, FavoriteRecipe } = require('../models');
const withAuth = require('../utils/auth');
      // Eventually, your application will query into the recipe API and get some form of response
      // This will probably be an array of objects where each object is a recipe
      // you'll pass that array here in this object

      const axios = require("axios");

      router.get('/',(req, res) => {
          const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
            params: { tags: '', number: '3' },
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

//Favorite Recipes 
router.get('/favorites', withAuth, async (req,res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude : ['password']},
      include: {model: FavoriteRecipe }
    })
  } catch (err) {
    res.status(500).json(err)
  }
})
router.get('/', (req, res) =>{
  res.render('homepage');
});

//Signup - new user
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});


//Login 
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router

const router = require('express').Router();
const axios = require("axios");


router.post('/', async (req, res) => {

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
  params: {
    query: req.body.query,
},
headers: {
  'X-RapidAPI-Key': 'a2608e4aa8msh80167ba33d588fep1bf1a9jsn104b238f5b4a',
  'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
}
};

axios.request(options).then(function (response) {
  console.log(response.data);
  res.json(response.data)
}).catch(function (error) {
  console.error(error);
  res.json(error)
});
}) 

module.exports = router;
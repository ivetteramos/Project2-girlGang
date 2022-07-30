const User = require('./User');
const favoriteRecipe = require('./favoriteRecipe');

favoriteRecipe.belongsTo(User,{
    foreignKey: 'user_id'
})

module.exports = { User, favoriteRecipe};


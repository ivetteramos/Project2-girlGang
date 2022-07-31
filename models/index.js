const User = require('./User');
const FavoriteRecipe = require('./FavoriteRecipe');

User.hasMany(FavoriteRecipe, {
    foreignKey: 'user_id'
})
FavoriteRecipe.belongsTo(User,{
    foreignKey: 'user_id'
})

module.exports = { User, FavoriteRecipe};



const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/models');

class favoriteRecipe extends Model{}

favoriteRecipe.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'user',
        key: 'id',
        }
    },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'favoriteRecipe',
    }
)

module.export = favoriteRecipe;
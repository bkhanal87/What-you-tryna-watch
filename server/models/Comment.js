const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Cpmment.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        comment_body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'please write a comment.'
                },
            }
        },
        
        movie_id: {
            type: DataTypes.INTEGER,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },

    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
      }
)

module.exports = Comment;
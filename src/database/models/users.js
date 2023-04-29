'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users extends Model {}
    users.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            fullName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: 'user',
            },
            emailVerified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            createdAt: {
                allowNull: true,
                type: DataTypes.DATE,
            },
			updatedAt: {
                allowNull: true,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: 'users'
        },
    );
    return users;
};

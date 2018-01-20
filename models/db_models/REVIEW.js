const Sequelize = require('sequelize');

const model = {
    name: 'REVIEW',

    fields: {
        ID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        AUTHOR_ID: {
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        REVIEWED_ID: {
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        RATING: {
            type: Sequelize.INTEGER(1),
            allowNull: false
        },
        TITLE: {
            type: Sequelize.CHAR(50),
            allowNull: false
        },
        CONTENT: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        CREATED: {
            type: Sequelize.DATE,
            allowNull: false
        },
        UPDATED: {
            type: Sequelize.DATE,
            allowNull: false
        },
        DELETED: {
            type: Sequelize.DATE,
            allowNull: true
        }
    }, 
    
    options: {
        createdAt: 'CREATED',
        updatedAt: 'UPDATED',
        deletedAt: 'DELETED',
        paranoid: true,
        timestamps: true,
        tableName: 'REVIEW'
    }
}

module.exports = model;
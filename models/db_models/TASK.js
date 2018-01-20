const Sequelize = require('sequelize');

const model = {
    name: 'TASK',

    fields: {
        ID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        USER_ID: {
            type: Sequelize.INTEGER(11),
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
        REWARD: {
            type: Sequelize.DECIMAL(20.00),
            allowNull: true
        },
        CURRENCY: {
            type: Sequelize.CHAR(3),
            allowNull: true
        },
        POSTCODE: {
            type: Sequelize.CHAR(50),
            allowNull: true
        },
        DISTRICT: {
            type: Sequelize.CHAR(50),
            allowNull: true
        },
        CITY: {
            type: Sequelize.CHAR(50),
            allowNull: true
        },
        COUNTRY: {
            type: Sequelize.CHAR(50),
            allowNull: false
        },
        ESTIMATE: {
            type: Sequelize.CHAR(50),
            allowNull: false
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
        tableName: 'TASK'
    }
}

module.exports = model;
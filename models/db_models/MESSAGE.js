const Sequelize = require('sequelize');

const model = {
    name: 'MESSAGE',

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
        TASK_ID: {
            type: Sequelize.INTEGER(11),
            allowNull: true
        },
        CHAT_ID: {
            type: Sequelize.INTEGER(11),
            allowNull: true
        },
        CONTENT: {
            type: Sequelize.TEXT,
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
        tableName: 'MESSAGE'
    }
}

module.exports = model;
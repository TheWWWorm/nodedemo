const Sequelize = require('sequelize');

const model = {
    name: 'ATTACHMENT',

    fields: {
        ID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        TASK_ID: {
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        PUBLIC_NAME: {
            type: Sequelize.CHAR(50),
            allowNull: true
        },
        NAME: {
            type: Sequelize.CHAR(100),
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
        tableName: 'ATTACHMENT'
    }
}

module.exports = model;
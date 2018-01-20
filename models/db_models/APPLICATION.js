const Sequelize = require('sequelize');

const model = {
    name: 'APPLICATION',

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
            allowNull: false
        },
        STATE: {
            type: Sequelize.INTEGER(2),
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
        tableName: 'APPLICATION'
    }
}

module.exports = model;
const Sequelize = require('sequelize');

const typeNameToCode = {
    employer: 0,
    employee: 1,
    both: 2
}

const model = {
    name: 'USER',

    fields: {
        ID: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        LOGIN: {
            type: Sequelize.CHAR(16),
            allowNull: false
        },
        PASSWORD: {
            type: Sequelize.CHAR(200),
            allowNull: false
        },
        TYPE: {
            type: Sequelize.INTEGER(2),
            allowNull: false
        },
        NAME: {
            type: Sequelize.CHAR(50),
            allowNull: false
        },
        SURNAME: {
            type: Sequelize.CHAR(50),
            allowNull: false
        },
        EMAIL: {
            type: Sequelize.CHAR(50),
            allowNull: false
        },
        REG_IP: {
            type: Sequelize.CHAR(50),
            allowNull: true
        },
        LAST_IP: {
            type: Sequelize.CHAR(50),
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
        SLOGAN  : {
            type: Sequelize.CHAR(50),
            allowNull: true
        },
        LAST_LOGIN: {
            type: Sequelize.DATE,
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
        tableName: 'USER'
    },

    fn: {
        class: {
            make(data)  {
                return this.create({
                    LOGIN: data.login,
                    PASSWORD: data.password,
                    TYPE: typeNameToCode[data.type],
                    NAME: data.name,
                    SURNAME: data.surname,
                    EMAIL: data.email,
                    COUNTRY: data.country
                });
            }
        },

        instance: {

        }
    }
}

module.exports = model;
const Sequelize = require("sequelize")
const { db } = require('../db')
const { STRING, TEXT } = Sequelize


const Container = db.define('container', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    location: {
        type: STRING,
        allowNull: false
    }
})

const Box = db.define('box', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

const Items = db.define('items', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    image: {
        type: STRING
    },
    description: {
        type: TEXT
    }
})

module.exports = {
    Container,
    Box,
    Items
}
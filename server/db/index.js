const { db } = require('./db')
const { Container, Box, Items } = require('./models/Models')

Box.belongsTo(Container)
Container.hasMany(Box)

Items.belongsTo(Box)
Box.hasMany(Items)

module.exports = {
    db,
    Container,
    Box,
    Items
}
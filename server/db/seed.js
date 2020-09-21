const faker = require('faker')
const { db, Container, Box, Items } = require('./index')

const seed = async () => {
    await db.sync({force: true})

    await Container.create({
        name: 'Alcohol Fridge',
        location: 'Back of the room, under the workbenches'
    })

    await Box.create({
        name: 'Beers',
        containerId: 1
    })

    for (let i = 0; i < 3; i++) {
        await Items.create({
            name: faker.commerce.product(),
            image: faker.image.food(),
            description: faker.lorem.sentences(),

            boxId: 1
        })
    }

    db.close()
    console.log('\n\n       Seeding successful!     \n\n')
}

seed().catch(error => {
    db.close()
    console.log(`\n\n       Seeding has failed due to ${error.message} in ${error.stack}!     \n\n`)
})
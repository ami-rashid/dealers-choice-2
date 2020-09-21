const router = require("express").Router()
const { Container, Box, Items } = require('../db/index')

//base route for the app is /api

router.get('/containers', async (req, res, next) => {
    try {
        const containers = await Container.findAll()
        res.json(containers)
    } catch(error) {
        next(error)
    }
})

router.get('/containers/:id', async (req, res, next) => {
    try {
        const container = await Container.findByPk(req.params.id);
        if (!container) {
            res.status(404).send('Container does not exist!')
        }
        res.json(container);
    } catch(error) {
        next(error)
    }
})

router.get('/boxes', async (req, res, next) => {
    try {
        const boxes = await Box.findAll()
        res.json(boxes)
    } catch(error) {
        next(error)
    }
})

router.get('/boxes/:id', async (req, res, next) => {
    try {
        const box = await Box.findByPk(req.params.id);
        if (!box) {
            res.status(404).send('Box does not exist!')
        }
        res.json(box);
    } catch(error) {
        next(error)
    }
})

router.get('/items', async (req, res, next) => {
    try {
        const items = await Items.findAll()
        res.json(items)
    } catch(error) {
        next(error)
    }
})

router.get('/items/:id', async (req, res, next) => {
    try {
        const item = await Items.findByPk(req.params.id);
        if (!item) {
            res.status(404).send('Item does not exist!')
        }
        res.json(item);
    } catch(error) {
        next(error)
    }
})

module.exports = router

const express = require('express')
const router = express.Router()
const Store = require('../models/store')

router.get('/', async (req, res) => {
  try {
    const Stores = await Store.find()
    res.json(Stores)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', getSubscriber, (req, res) => {
  res.json(res.Store)
})

router.post('/', async (req, res) => {
  const store = new Store({
    name: req.body.name,
    image: req.body.image,
    Description: req.body.Description,
    Department: req.body.Department,
    rating: req.body.rating,
  })
  try {
    const newStore = await store.save()
    res.status(201).json(newStore)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})



router.delete('/:id', getStore, async (req, res) => {
    try {
      await res.store.remove()
      res.json({ message: 'Deleted Store' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

async function getSubscriber(req, res, next) {
  let store
  try {
    store = await Store.findById(req.params.id)
    if (store == null) {
      return res.status(404).json({ message: 'Cannot find store' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.subscriber = store
  next()
}

module.exports = router
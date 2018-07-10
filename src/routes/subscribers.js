const express = require('express')
const router = express.Router()
const db = require(process.env.MOCKS ? '../db/db-mocks.js' : '../db/db-sql.js')

// récupération des données utilisateur
router.get('/subscribers', (req, res, next) => {
  db.getSubscribers()
    .then(subscribers => res.json(subscribers))
    .catch(next)
})

// envoi des données utilisateur
router.post('/subscribers', (req, res, next) => {
  const subscriber = req.body
  console.log(subscriber)
  db.newSubscriber(subscriber)
    .then(result => res.json('ok'))
    .catch(next)
})

module.exports = router
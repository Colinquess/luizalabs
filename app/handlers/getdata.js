const db = require('../services/db.js')

function getdata (req, res, next) {
  db.getAllRequests()
    .then(dbResp => res.status(200).json(dbResp[0]))
    .catch(next)
}

module.exports = getdata

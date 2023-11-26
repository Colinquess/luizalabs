const db = require('../services/db.js')

function getdatabyid (req, res, next) {
  db.getRequest(parseInt(req.params.id))
    .then(dbResp => res.status(200).json(dbResp[0]))
    .then(next)
}

module.exports = getdatabyid

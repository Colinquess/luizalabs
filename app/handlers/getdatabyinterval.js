const db = require('../services/db.js')

function getdatabyinterval (req, res, next) {
  db.getRequestByPeriod(parseInt(req.params.dtstart), parseInt(req.params.dtend))
    .then(dbResp => res.status(200).json(dbResp[0]))
    .catch(next)
}

module.exports = getdatabyinterval

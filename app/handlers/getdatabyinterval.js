const db = require('../services/db.js')

async function getdatabyinterval (req, res, next) {
  try {
    const dbResp = await db.getRequestByPeriod(parseInt(req.params.dtstart), parseInt(req.params.dtend))
    return res.status(200).json(dbResp[0])
  } catch (error) {
    return next(error)
  }
}

module.exports = getdatabyinterval

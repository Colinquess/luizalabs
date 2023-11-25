const db = require('../services/db.js')

async function getdatabyid (req, res, next) {
  try {
    const dbResp = await db.getRequest(parseInt(req.params.id))
    return res.status(200).json(dbResp[0])
  } catch (error) {
    return next(error)
  }
}

module.exports = getdatabyid

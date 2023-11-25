const db = require('../services/db.js')

async function getdata (req, res, next) {
  try {
    const dbResp = await db.getAllRequests()
    return res.status(200).json(dbResp[0])
  } catch (error) {
    return next(error)
  }
}

module.exports = getdata

const mysql2Promise = require('mysql2/promise')
const config = require('../config.js')

async function setRequests (reqObjs) {
  const connection = await mysql2Promise.createConnection(config.db)

  for (const reqObj of reqObjs) {
    console.log(JSON.stringify(reqObj))
    await connection.query(`CALL luizalabsdb.set_request(${reqObj.userId}, '${reqObj.userName}', ${reqObj.productId}, ${reqObj.productValue}, ${reqObj.orderId}, ${reqObj.purchaseDate})`)
  }

  return 'File(s) read sucesssfully'
}

async function getRequest (reqId) {
  const connection = await mysql2Promise.createConnection(config.db)

  const [results] = await connection.query(`CALL luizalabsdb.get_request(${reqId})`)

  return results
}

async function getAllRequests () {
  const connection = await mysql2Promise.createConnection(config.db)

  const [results] = await connection.query('CALL luizalabsdb.get_all_requests()')

  return results
}

async function getRequestByPeriod (dtStart, dtEnd) {
  const connection = await mysql2Promise.createConnection(config.db)

  const [results] = await connection.query(`CALL luizalabsdb.get_all_requests_from_period(${dtStart}, ${dtEnd})`)

  return results
}

module.exports = {
  setRequests,
  getRequest,
  getRequestByPeriod,
  getAllRequests
}

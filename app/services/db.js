const mysql2Promise = require('mysql2/promise')
const config = require('../config.js')

async function setRequests (reqObjs) {
  const connection = await mysql2Promise.createConnection(config.db)

  const queryResults = await Promise.all(reqObjs.map(reqObj =>
    connection.query(`CALL luizalabsdb.set_request(${reqObj.userId}, '${reqObj.userName}', ${reqObj.productId}, ${reqObj.productValue}, ${reqObj.orderId}, ${reqObj.purchaseDate})`)
  ))

  connection.end()
  queryResults.filter(([result]) => result.length > 0)

  return queryResults.length === 0 ? 'File(s) read sucesssfully' : 'Failed to read file(s)'
}

async function getRequest (reqId) {
  const connection = await mysql2Promise.createConnection(config.db)
  const [results] = await connection.query(`CALL luizalabsdb.get_request(${reqId})`)
  connection.end()

  return results
}

async function getAllRequests () {
  const connection = await mysql2Promise.createConnection(config.db)
  const [results] = await connection.query('CALL luizalabsdb.get_all_requests()')
  connection.end()

  return results
}

async function getRequestByPeriod (dtStart, dtEnd) {
  const connection = await mysql2Promise.createConnection(config.db)
  const [results] = await connection.query(`CALL luizalabsdb.get_all_requests_from_period(${dtStart}, ${dtEnd})`)
  connection.end()

  return results
}

module.exports = {
  setRequests,
  getRequest,
  getRequestByPeriod,
  getAllRequests
}

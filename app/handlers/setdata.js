const config = require('../config.js')
const db = require('../services/db.js')

function getFilesAsStrings (files) {
  // Every file
  const bufferFiles = Array.from(files)

  // Every file each transformed into a string
  const stringFiles = bufferFiles.map(file => String(file.buffer))

  // Every string concatenated into a single giant string
  const singleString = ''.concat(...stringFiles)

  // Giant string separated into strings array by "\n" (line separator)
  const multipleStrings = singleString.split('\n')

  return multipleStrings
}

function stringsToObjects (strings, objectRules) {
  return strings.map(string => {
    const ruledObject = {}

    objectRules.forEach(rule => {
      /* This works and is way shorter instead of next 12 lines, but doens't feel right, too hard to maintain
            ruledObject[rule.name] = (rule.type == 'integer'?parseInt:rule.type == 'float'?parseFloat:String)
                                        (string.substring(rule.startingFrom, rule.endingIn))
*/
      ruledObject[rule.name] = string.substring(rule.startingFrom, rule.endingIn)

      switch (rule.type) {
        case 'integer':
          ruledObject[rule.name] = parseInt(ruledObject[rule.name])
          break
        case 'float':
          ruledObject[rule.name] = parseFloat(ruledObject[rule.name])
          break
        default: // string
          ruledObject[rule.name] = String(ruledObject[rule.name])
            .trim()
            .replace(/'/g, "\\'")
      }
    })

    return ruledObject
  })
}

async function setdata (req, res, next) {
  try {
    // Validation, max "startingFrom | endingIn" must be total line length
    const validLineLength = Math.max(config.legacyStringRules.map(rule => Math.max([rule.endingIn, rule.startingFrom])))

    const validStrings = getFilesAsStrings(req.files)
      .filter(line => line.length === validLineLength)

    const validObjects = stringsToObjects(validStrings, config.legacyStringRules)

    const dbResp = await db.setRequests(validObjects)

    return res.status(200).json(dbResp)
  } catch (error) {
    return next(error)
  }
}

module.exports = setdata

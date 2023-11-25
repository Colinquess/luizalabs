const config = {
  db: {
    host: 'db4free.net',
    user: 'luizalabsdb',
    password: 'luizalabsdb',
    database: 'luizalabsdb',
    connectTimeout: 180000,
    multipleStatements: true
  },
  legacyStringRules: [
    {
      name: 'userId',
      startingFrom: 0,
      endingIn: 10,
      type: 'integer'
    },
    {
      name: 'userName',
      startingFrom: 10,
      endingIn: 55,
      type: 'string'
    },
    {
      name: 'orderId',
      startingFrom: 55,
      endingIn: 65,
      type: 'integer'
    },
    {
      name: 'productId',
      startingFrom: 65,
      endingIn: 75,
      type: 'integer'
    },
    {
      name: 'productValue',
      startingFrom: 75,
      endingIn: 87,
      type: 'float'
    },
    {
      name: 'purchaseDate',
      startingFrom: 87,
      endingIn: 95,
      type: 'integer'
    }
  ]
}

module.exports = config

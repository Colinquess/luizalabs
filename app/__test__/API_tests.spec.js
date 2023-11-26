const request = require('supertest')
const app = require('../app.js')
const path = require('path')

console.warn('Take notice that the database\'s server used in this project is quite slow due to it\'s free nature, so the tests might fail due to timeout caused by server load during business hours')

afterAll(async () => {
  await new Promise(resolve => setTimeout(resolve, 2500)) // avoid jest open handle error
})

describe('Post Endpoint', () => {
  test('SetData endpoint', async () => {
    const filePath = path.resolve(__dirname, '../../', 'test_sample.txt')

    const req = await request(app)
      .post('/api/setdata')
      .attach('files', filePath, { contentType: 'multipart/form-data' })

    expect(req.body)
      .toEqual('File(s) read sucesssfully')
  }, 15000)
})

describe('Get Endpoint', () => {
  test('Get report by ID endpoint', async () => {
    const req = await request(app)
      .get('/api/getdatabyid/14')

    expect(req.body)
      .toEqual([{ name: 'Sammie Baumbach', orders: [{ date: 20210908, order_id: 14, products: [{ product_id: 117, value: 1915.86 }, { product_id: 255, value: 1121.58 }, { product_id: 1651, value: 137.8 }], total: 3175.24 }], user_id: 1 }])
  }, 15000)

  test('Get reports by interval', async () => {
    const req = await request(app)
      .get('/api/getdatabyinterval/20211107/20211222')

    expect(req.body)
      .toHaveLength(167)
  }, 15000)

  test('Get all reports', async () => {
    const req = await request(app)
      .get('/api/getdata')

    expect(req.body)
      .toHaveLength(284)
  }, 15000)
})

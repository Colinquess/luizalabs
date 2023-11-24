const express = require('express')
const multer = require('multer')
const handlers = require('./handlers')

const app = express()
const multerConfig = multer({ storage: multer.memoryStorage() })
const port = 3030

app.listen(port, _ => console.log(`Server is running on http://localhost:${port}`))

// File Upload Endpoint
app.post('/api/setdata', multerConfig.array('files'), handlers.setdata)

// Data Retrieval Endpoint
app.get('/api/getdata', handlers.getdata)
app.get('/api/getdatabyid/:id', handlers.getdatabyid)
app.get('/api/getdatabyinterval/:dtstart/:dtend', handlers.getdatabyinterval)

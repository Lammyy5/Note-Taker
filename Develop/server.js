// required files

const express = require('express')
const path = require('path')
const api = require('./routes/index.js')

// Port

const PORT = process.env.PORT || 3001

// express app function

const app = express()

// Middleware for parsing JSON and urlencoded form data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)

// Connecting the public folder

app.use(express.static('public'))

// Get Route for homepage

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))

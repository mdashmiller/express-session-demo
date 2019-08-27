const express = require('express')
const session = require('express-session')

const {
  PORT = 4000
} = process.env

const app = express()

app.listen(PORT, () => console.log(`server listening on http://localhost:${PORT}`))

const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.config()
const PORT = process.env.PORT || 6969

const db = require("./models")

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
  })
})

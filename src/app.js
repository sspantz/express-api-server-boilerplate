/* eslint-disable no-console */
const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: {
      name: "Alice",
      age: 22,
    },
  })
})

const port = 4000

exports.start = () =>
  app.listen(port, () => console.log(`listening on port ${port}.`))

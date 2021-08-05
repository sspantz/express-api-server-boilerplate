/* eslint-disable no-console */
import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: {
      name: "Jocelyn",
      age: 22,
    },
  })
})

app.get("/error", (req, res) => {
  res.sendStatus(400)
})

export default app

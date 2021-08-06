/* eslint-disable no-console */
import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.json({
    status: "OK",
  })
})

app.post("/", (req, res) => {
  res.sendStatus(400)
})

export default app

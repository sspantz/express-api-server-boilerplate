/* eslint-disable no-console */
import express from "express"
// import config from "../config"
import * as config from "../config"

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

const env = process.env.NODE_ENV ?? config.env
const port = process.env.PORT || (env === "PROD" ? 3000 : 5000)

export default () =>
  app.listen(port, () => console.log(`listening on port ${port}.`))

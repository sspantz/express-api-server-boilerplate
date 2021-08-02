/* eslint-disable no-console */
import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: {
      name: "Jocelyn",
      age: 36,
    },
  })
})

const port = 4000

export default () =>
  app.listen(port, () => console.log(`listening on port ${port}.`))

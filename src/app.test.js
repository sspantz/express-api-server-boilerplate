import request from "supertest"
import app from "./app"

describe(`testing app.js`, () => {
  it(`test should pass if testing framework is set properly`, () => {
    expect(true).toBe(true)
  })

  it(`GET / request should return status "OK"`, () =>
    request(app).get("/").expect(200).expect("Content-type", /json/))

  it(`POST / request should return 400`, () =>
    request(app).post("/").expect(400))
})

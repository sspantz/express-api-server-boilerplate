import app from "./app"
import config from "../config"

const env = process.env.NODE_ENV ?? config.env
const port = process.env.PORT || (env === "PROD" ? 3000 : 5000)

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server is listen on port ${port}`))

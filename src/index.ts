import { AppDataSource } from "./data-source"
import routes from "./routes"

const express = require('express')

AppDataSource.initialize().then(async () => {
    const app = express()
    app.use(routes)
    app.listen(3333)
})
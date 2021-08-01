const express = require('express')
const app = express()

const countRoute = require('./routes/count')
const healthRoute = require('./routes/health')

app.use('', countRoute)
app.use('', healthRoute)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server  Started @ 3000")
})
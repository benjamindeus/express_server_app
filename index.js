const express = require('express')
//user app
const appuser = require("./routes/users.js")
const app = express()
const port = 3000
app.use("/api/user",appuser)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
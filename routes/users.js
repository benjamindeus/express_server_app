const express = require('express')

const route = express.Router()

route.get('/get_users',async(req, res) => {
    var response = await fetch('https://jsonplaceholder.typicode.com/users')
    var users = await response.json()

    res.json(
        users
    )

});

module.exports = route
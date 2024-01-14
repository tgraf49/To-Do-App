const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) =>
{
    console.log("Somebody just hit the INDEX");
    res.send("");
});

app.get('/second', (req, res) =>
{
    console.log("Second Page")
    res.send("My Second Page")
});

app.listen(process.env.PORT)
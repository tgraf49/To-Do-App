// require needed for modules to be used 
const express = require('express')

// initialize the app variable
const app = express()

// create a homepage route
app.get('/', (req, res) =>
{
// this gets sent to the client
res.send("If my function is working I'll see this in the browser")
});

// form another route
app.get('/second', (req, res) =>
{
res.send("My Second Page")
});

// now you must call for the server to listen with app.listen() and give this function a port number
// the callback function is optional to display text once the server comes online
app.listen(3000, () => {
    console.log('I am awake!')
});
const express = require('express');
var data = require("../src/Util/Servers.json")
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')

 app.use(bodyParser.json());

 app.post('/*', cors(), (req, res) => {
    console.log(JSON.stringify(req.body))
    console.log("sending data")

    res.send("heres the response!");
});

app.get('/', cors(), (req, res) => {
    console.log(JSON.stringify(req.body))
    console.log("sending data")

    res.header('content-type', 'application/json').send("heres the response!");
});

app.listen(3001, () => console.log(`Listening on port 3001!`))


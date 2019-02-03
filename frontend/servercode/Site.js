const express = require('express');
var data = require("../src/Util/Servers.json")
const app = express()
const bodyParser = require('body-parser')

 app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.Host)
    console.log("sending data")

    res.send("heres the response!");
});

app.listen(3001, () => console.log(`Listening on port 3001!`))


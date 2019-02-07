const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');

const data = require("../src/Util/Servers.json")
const app = express()

app.use(bodyParser.json());
app.use(cors());

app.post('/roomLogin', (req, res) => {
    console.log(req.body.login + " " + req.body.password)
    var details = req.body
    if(details.login == details.password){
        res.send("true")
    }
    else
    {
        res.send("false")
    }
});

app.listen(3001, () => console.log(`Listening on port 3001!`))

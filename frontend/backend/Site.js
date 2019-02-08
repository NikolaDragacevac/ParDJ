const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

var data = require("../src/Util/Logins/login.json")
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/roomLogin', (req, res) => {
    console.log(search(req.body))
    console.log(searchNW(req.body))
    res.send(search(req.body));
});

function search(params) {
    return data.filter(temp => (temp.login === params.login) && (temp.password === params.password)).length == 1;
}

app.listen(3001, () => console.log(`Listening on port 3001!`))

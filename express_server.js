const express = require('express');
const app = express();
const PORT = 8080;

let urlDatabase = {
    "b2xVn2": "http://www.lighthouselabs.ca",
    "9sm5xK": "http://www.google.com"
}

app.get('/', (req, res) => {
    res.end('This works!')
});

app.listen(PORT, () => {
    console.log(`Example app listening to port ${PORT}`)
})
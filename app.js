const express = require("express");
const { readFile } = require("fs");
const { dirname } = require("path");
const app = express();
const port = 5005;

app.get("/", (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
})

app.get("/about", (req, res) => {
    res.sendFile('./about.html', {root: __dirname});
})

app.get("/contact-me", (req, res) => {
    res.sendFile('./contact-me.html', {root: __dirname});
})

app.use(async function(req, res) {
    if (req.baseUrl != '/' && '/about' && '/contact-me') {
        res.sendFile('./404.html', {root: __dirname});
    }
})

app.listen(port)
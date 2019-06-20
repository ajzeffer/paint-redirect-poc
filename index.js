const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.get('/redir', (req, res) => {
    console.log('made it to redir');
    setTimeout(() => {
        return res.redirect(301,'/land');
    },5000);
});
app.get('/land', (req, res) => {
    res.sendFile('land.html', {
        root: path.join(__dirname, './')
    })
});
app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

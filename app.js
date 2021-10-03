require('./models-relations.js');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(require('./controllers/pages'));
app.use(require('./controllers/users'));
app.use(require('./controllers/tattooists'));
app.use(require('./controllers/slots'));

server.listen(3000, () => {
});
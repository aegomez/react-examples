"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const https = require("https");
const express = require("express");
const errorhandler = require("errorhandler");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const About = require("./components/about");
const app = express();
const PORT = 3000;
const PORT_S = 443;
app.set('views', './dist/views/');
app.set('view engine', 'hbs');
app.get('/', (_, res) => {
    res.send('Hello Sir');
});
app.get('/about', (_, res) => {
    const aboutHMTL = ReactDOMServer.renderToString(React.createElement(About));
    res.render('about', {
        about: aboutHMTL
    });
});
app.all('*', (_, res) => {
    res.status(404).send('Not found... did you mean to go to /about instead?');
});
app.use(errorhandler);
app.listen(PORT, () => {
    console.log('HTTP listening on port ' + PORT);
});
try {
    const options = {
        key: fs.readFileSync('./server.key'),
        cert: fs.readFileSync('./server.crt')
    };
    https.createServer(options, app).listen(PORT_S, () => {
        console.log('HTTPS listening on port ' + PORT_S);
    });
}
catch (e) {
    console.warn('Create server.key and server.crt for HTTPS');
}

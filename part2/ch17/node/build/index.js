"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const EmailComponent = require("./email");
const Email = React.createElement(EmailComponent);
const emailString = ReactDOMServer.renderToString(Email);
const emailStaticMarkup = ReactDOMServer.renderToStaticMarkup(Email);
const emailStringWithName = ReactDOMServer.renderToString(React.createFactory(EmailComponent)({
    name: 'Sir Johny McJohnface'
}));
console.log('**string**\n', emailString);
console.log('**static**\n', emailStaticMarkup);
console.log('**s-name**\n', emailStringWithName);

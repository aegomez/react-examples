import ReactDOMServer = require('react-dom/server');
import React = require ('react');

import EmailComponent = require ('./email');

const Email = React.createElement(EmailComponent);

const emailString = ReactDOMServer.renderToString(Email);
const emailStaticMarkup = ReactDOMServer.renderToStaticMarkup(Email);
const emailStringWithName = ReactDOMServer.renderToString(
  React.createFactory(EmailComponent)({
    name: 'Sir Johny McJohnface'
  })
);

console.log('**string**\n', emailString);
console.log('**static**\n', emailStaticMarkup);
console.log('**s-name**\n', emailStringWithName);
"use strict";
const React = require("react");
const Email = (props) => (React.createElement("div", null,
    React.createElement("h1", null,
        "Thank you ",
        (props.name) ? props.name : '',
        "for signing up!"),
    React.createElement("p", null, "If you have any questions, please contact support")));
module.exports = Email;

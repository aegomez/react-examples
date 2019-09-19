"use strict";
const React = require("react");
module.exports = function About() {
    return React.createElement("div", null,
        React.createElement("a", { href: "http://www.example.com", target: "_blank" }, "Example.com "),
        " is a domain used for illustrative examples in documents.");
};

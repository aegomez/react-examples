class HelloWorld extends React.Component {
  render() {
    let dateTime = new Date().toLocaleString();
    return React.createElement("div", null, React.createElement("h1", null, "1. Hello there."), React.createElement("h1", null, "2. Hello there."), React.createElement("span", null, "Current date and time is ", dateTime));
  }

}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
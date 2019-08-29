class HelloWorld extends React.Component {
  render() {
    let dateTime = new Date().toLocaleString();
    return (
      <div>
        <h1>1. Hello there.</h1>
        <h1>2. Hello there.</h1>
        {/* passing a local variable */}
        <span>Current date and time is {dateTime}</span>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('content')
);
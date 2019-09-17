class HelloWorldToo extends React.Component {
  render() {
    return React.createElement("h1", this.props, "Hello ", this.props.frameworkName);
  }

}

ReactDOM.render(React.createElement("div", null, React.createElement(HelloWorldToo, {
  id: "ember",
  frameworkName: "Ember.js",
  title: "A framework for creating ambitious web applications."
}), React.createElement(HelloWorldToo, {
  id: "backbone",
  frameworkName: "Backbone.js",
  title: "Backbone.js gives structure to web applications..."
}), React.createElement(HelloWorldToo, {
  id: "angular",
  frameworkName: "Angular.js",
  title: "Superheroic JavaScript MVW Framework"
})), document.getElementById('content'));
// working with properties

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props,  // pass all the properties to the child
      `Hello ${this.props.frameworkName} world!!!`  
    );
  }
}

// pass properties to a component in an object literal
// in the second argument to createElement()

// If a property's name matches a standard HTML attribute,
// it is rendered as an attribute of the element.

// If there is no match, the value is still
// accessible in the this.props object.

ReactDOM.render(
  React.createElement(
    'main',
    null,
    React.createElement(HelloWorld, {
      id: 'ember',
      frameworkName: 'Ember.js',
      title: 'A framework for creating ambitious web applications.'
    }),
    React.createElement(HelloWorld, {
      id: 'backbone',
      frameworkName: 'Backbone.js',
      title: 'Backbone.js gives structure to web applications...'
    }),
    React.createElement(HelloWorld, {
      id: 'angular',
      frameworkName: 'Angular.js',
      title: 'Superheroic JavaScript MVW Framework.'
    })
  ),
  document.getElementById('content')
);
interface Component {
  render(): JSX.Element
}

type Header1 = {
  id: string
  title: string
  frameworkName: string
};

class HelloWorldToo extends React.Component<Header1, {}> implements Component {
  render() {
    return <h1 {...this.props}>
      Hello {this.props.frameworkName}
    </h1>
  }
}

ReactDOM.render(
  <div>
    <HelloWorldToo 
      id='ember'
      frameworkName='Ember.js'
      title='A framework for creating ambitious web applications.' />
    <HelloWorldToo
      id='backbone'
      frameworkName= 'Backbone.js'
      title= 'Backbone.js gives structure to web applications...' />
    <HelloWorldToo
      id= 'angular'
      frameworkName= 'Angular.js'
      title= 'Superheroic JavaScript MVW Framework' />
  </div>,
  document.getElementById('content')
)
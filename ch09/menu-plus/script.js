class MenuZ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    fetch('./menus.json').then(response => response.json()).then(data => {
      this.setState({
        menus: data.menus
      });
    }).catch(err => console.error('Error on fetch', err));
  }

  render() {
    return React.createElement("div", null, this.state.menus.map((v, i) => React.createElement("div", {
      key: i
    }, React.createElement(LinkZ, {
      label: v
    }))));
  }

}

class LinkZ extends React.Component {
  render() {
    let url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
    return React.createElement("div", null, React.createElement("a", {
      href: url
    }, this.props.label), React.createElement("br", null));
  }

}

ReactDOM.render(React.createElement(MenuZ, null), document.getElementById('menu'));

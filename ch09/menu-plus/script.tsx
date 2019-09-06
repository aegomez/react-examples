interface MenuZStates {
  menus: string[];
}

interface LinkZProps {
  label: string;
}

class MenuZ extends React.Component<{}, MenuZStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    fetch('./menus.json')
      .then(response => response.json())
      .then((data: {menus: string[]}) => {
        this.setState({
          menus: data.menus
        });
      })
      .catch(err => console.error('Error on fetch', err));
  }

  render() {
    return (
      <div>
        {this.state.menus.map((v, i) => 
          <div key={i}><LinkZ label={v} /></div>
        )}
      </div>
    );
  }
}

class LinkZ extends React.Component<LinkZProps> {
  render() {
    let url = '/' + 
      this.props.label
      .toLowerCase()
      .trim()
      .replace(' ', '-');

    return (
      <div>
        <a href={url}>{this.props.label}</a>
        <br/>
      </div>
    );
  }
}

ReactDOM.render(
  <MenuZ />,
  document.getElementById('menu')
);
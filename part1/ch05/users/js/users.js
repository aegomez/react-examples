class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(this.props['data-url']).then(response => response.json()).then(users => this.setState({
      users: users
    })).catch(e => console.log('could not fetch data', e));
  }

  render() {
    return React.createElement("div", {
      className: "container"
    }, React.createElement("h1", null, "List of Users"), React.createElement("table", {
      className: "table-striped table-condensed table table-bordered table-hover"
    }, React.createElement("tbody", null, this.state.users.map(user => React.createElement("tr", {
      key: user.id
    }, React.createElement("td", null, user.first_name, " ", user.last_name), React.createElement("td", null, user.email), React.createElement("td", null, user.ip_address))))), React.createElement("button", {
      onClick: this.handleClick
    }, "Click"));
  }

  handleClick = event => {
    let user = {
      id: 999,
      first_name: 'John',
      last_name: 'Smith',
      email: 'foo@acme.com',
      gender: 'undefined',
      ip_address: '123'
    };
    this.setState({
      users: [...this.state.users, user]
    });
  };
}
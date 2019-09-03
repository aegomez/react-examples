type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string
}

interface UserList {
  users: User[]
}

interface UserData {
  ['data-url']: string
}

class Users extends React.Component<UserData, UserList> {
  constructor(props: UserData) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(this.props['data-url'])
      .then(response => response.json())
      .then((users: User[]) => this.setState({ users: users }))
      .catch(e => console.log('could not fetch data', e));
  }

  render() {
    return <div className="container">
      <h1>List of Users</h1>
      <table className="table-striped table-condensed table table-bordered table-hover">
        <tbody>{this.state.users.map(user => 
          <tr key={user.id}>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.ip_address}</td>
          </tr>)}
        </tbody>
      </table>
     </div>
  }
}
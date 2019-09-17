interface Session {
  user: {
    session: string
  }
}

class C1 extends React.Component<Session, {}> {
  render() {
    let link: JSX.Element;
    if (this.props.user.session) {
      link = <a href="/logout">Logout</a>
    }
    else {
      link = <a href="/login">Login</a>
    }
    return <div>{link}</div>
  }
}

class C2 extends React.Component<Session, {}> {
  render() {
    return <div>{
      (sessionFlag => {
        if (sessionFlag) {
          return <a href="/logout">Logout</a>
        }
        else {
          return <a href="/login">Login</a>
        }
      })(this.props.user.session)
    }</div>
  }
}

class C3 extends React.Component<Session, {}> {
  render() {
    return <div>
      {this.props.user.session
        ? <a href="/logout">Logout</a> 
        : <a href="/login">Login</a> }
    </div>
  }
}

class C4 extends React.Component<Session, {}> {
  render() {
    let sessionFlag = this.props.user.session;
    return (
      <div>
        <a href="{(sessionFlag)?'/logout':'/login">
         {(sessionFlag)?'Logout':'Login'}
        </a>
      </div>
    )
  }
}
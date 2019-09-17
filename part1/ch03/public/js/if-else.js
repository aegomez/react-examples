class C1 extends React.Component {
  render() {
    let link;

    if (this.props.user.session) {
      link = React.createElement("a", {
        href: "/logout"
      }, "Logout");
    } else {
      link = React.createElement("a", {
        href: "/login"
      }, "Login");
    }

    return React.createElement("div", null, link);
  }

}

class C2 extends React.Component {
  render() {
    return React.createElement("div", null, (sessionFlag => {
      if (sessionFlag) {
        return React.createElement("a", {
          href: "/logout"
        }, "Logout");
      } else {
        return React.createElement("a", {
          href: "/login"
        }, "Login");
      }
    })(this.props.user.session));
  }

}

class C3 extends React.Component {
  render() {
    return React.createElement("div", null, this.props.user.session ? React.createElement("a", {
      href: "/logout"
    }, "Logout") : React.createElement("a", {
      href: "/login"
    }, "Login"));
  }

}

class C4 extends React.Component {
  render() {
    let sessionFlag = this.props.user.session;
    return React.createElement("div", null, React.createElement("a", {
      href: "{(sessionFlag)?'/logout':'/login"
    }, sessionFlag ? 'Logout' : 'Login'));
  }

}
class _Button extends React.Component {
  render() {
    return React.createElement("button", {
      className: "btn btn-primary",
      onClick: this.props.handleClick
    }, this.props.label);
  }

}

class _Link extends React.Component {
  render() {
    return React.createElement("a", {
      href: "#",
      onClick: this.props.handleClick
    }, this.props.label);
  }

}

class _Logo extends React.Component {
  render() {
    return React.createElement("a", {
      href: "#",
      onClick: this.props.handleClick
    }, React.createElement("img", {
      src: "logo.png",
      alt: "react logo",
      width: "40"
    }));
  }

}
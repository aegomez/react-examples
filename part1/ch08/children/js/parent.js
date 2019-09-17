class Parent extends React.Component {
  render() {
    return React.createElement("div", {
      className: "content"
    }, this.props.children);
  }

}
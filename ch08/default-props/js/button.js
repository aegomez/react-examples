class Button extends React.Component {
  render() {
    return React.createElement("button", {
      className: "btn"
    }, this.props.buttonLabel);
  }

}

Button.defaultProps = {
  buttonLabel: 'Submit'
};

const Button2 = props => {
  return React.createElement("button", {
    className: "btn"
  }, props.buttonLabel);
};

Button2.defaultProps = {
  buttonLabel: 'OK'
};

const Button3 = ({
  buttonLabel = 'OK TS'
}) => {
  return React.createElement("button", {
    className: "btn"
  }, buttonLabel);
};
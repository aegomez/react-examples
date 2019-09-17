class Button10 extends React.Component {
  render() {
    return React.createElement("button", {
      className: "btn btn-primary"
    }, this.props.buttonLabel);
  }

}

Button10.defaultProps = {
  buttonLabel: 'Submit'
};
Button10.propTypes = {
  handler: PropTypes.func,
  title: PropTypes.string,

  email(props, propName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed');
    }
  }

};
const buttonPropTypes = {
  handler: PropTypes.func,
  title: PropTypes.string,

  email(props, propName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed');
    }
  }

};
const buttonDefaultProps = {
  buttonLabel: 'Submit'
};

class Button11 extends React.Component {
  render() {
    return React.createElement("button", {
      className: "btn btn-warning"
    }, this.props.buttonLabel);
  }

}

Button11.defaultProps = buttonDefaultProps;
Button11.propTypes = buttonPropTypes;
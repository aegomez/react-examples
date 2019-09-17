type Button10Props = {
  buttonLabel: string;
  handler: (...args: any[]) => any;
  title: string;
  email: string;
}

class Button10 extends React.Component<Button10Props> {
  render() {
    return <button className="btn btn-primary">{this.props.buttonLabel}</button>
  }

  static defaultProps: Partial<Button10Props>;
  static propTypes: PropTypes.InferProps<Button10Props>;
}

Button10.defaultProps = {
  buttonLabel: 'Submit'
};

Button10.propTypes = {
  handler: PropTypes.func,
  title: PropTypes.string,
  email(props: {[key: string]: string}, propName: string) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed');
    }
  }
};


const buttonPropTypes = {
  handler: PropTypes.func,
  title: PropTypes.string,
  email(props: {[key: string]: string}, propName: string) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed');
    }
  }
};

const buttonDefaultProps = {
  buttonLabel: 'Submit'
}

type Button11Props = PropTypes.InferProps<typeof buttonPropTypes & typeof buttonDefaultProps>;

class Button11 extends React.Component<Button11Props> {
  render() {
    return <button className="btn btn-warning">{this.props.buttonLabel}</button>
  }
  static defaultProps: Button11Props;
  static propTypes: typeof buttonPropTypes;
}

Button11.defaultProps = buttonDefaultProps;
Button11.propTypes = buttonPropTypes;
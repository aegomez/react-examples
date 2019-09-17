type ButtonProps = {
  buttonLabel: string;
}

class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps;
  
  render() {
    return <button className="btn">{this.props.buttonLabel}</button>
  }
}

// define the component default properties
Button.defaultProps = {
  buttonLabel: 'Submit',
};

// OR as a Function Component

const Button2 = (props: ButtonProps) => {
  return <button className="btn">{props.buttonLabel}</button>
};
Button2.defaultProps = {
  buttonLabel: 'OK'
};

// OR using TypeScript default arguments

const Button3: React.FC<Partial<ButtonProps>> = ({ buttonLabel = 'OK TS' }) => {
  return <button className="btn">{buttonLabel}</button>
}
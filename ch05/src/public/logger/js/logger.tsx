type LoggerProps = {
  time: string;
}

class Logger extends React.Component<LoggerProps> {
  constructor(props: LoggerProps) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount is triggered');
  }
  
  componentDidMount() {
    console.log('componentDidMount is triggered');
    console.log('DOM node', ReactDOM.findDOMNode(this));
  }

  componentWillReceiveProps(newProps: {}) {
    console.log('componentWillReceiveProps is triggered');
    console.log('new props:', newProps);
  }

  shouldComponentUpdate(newProps: {}, newState: {}) {
    console.log('shouldCompoenentUpdate is triggered');
    console.log('new props:', newProps);
    console.log('new state:', newState);
    return true;
  }

  componentWillUpdate(newProps: {}, newState: {}) {
    console.log('componentWillUpdate is triggered');
    console.log('new props:', newProps);
    console.log('new state:', newState);
  }

  componentDidUpdate(oldProps: {}, oldState: {}) {
    console.log('componentDidUpdate is triggered');
    console.log('old props:', oldProps);
    console.log('old state:', oldState);
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount triggered');
  }

  render() {
    console.log('rendering... Display');
    return (
      <div>{this.props.time}</div>
    )
  }
  
}
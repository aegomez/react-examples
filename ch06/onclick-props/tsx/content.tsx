type Cont2State = {
  counter: number
}

class Content2 extends React.Component<{}, ContState> {
  constructor(props: {}) {
    super(props);
    // bind the context in the constructor
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0
    };
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <ClickCounterButton
          counter={this.state.counter}
          handler={this.handleClick} />
      </div>
    )
  }
}
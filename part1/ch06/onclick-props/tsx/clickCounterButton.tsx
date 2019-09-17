type ButtonProps = {
  counter: number
  handler: (event: React.MouseEvent) => void
}

class ClickCounterButton extends React.Component<ButtonProps> {
  render() {
    return <button
      onClick={this.props.handler}
      className="btn btn-danger">
        Increase Volume (Current volume is {this.props.counter})
      </button>
  }
}
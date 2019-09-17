class _Button extends React.Component<ClickElement> {
  render() {
    return (
      <button
        className='btn btn-primary'
        onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    )
  }
}

class _Link extends React.Component<ClickElement> {
  render() {
    return <a href="#" onClick={this.props.handleClick}>
      {this.props.label}
    </a>
  }
}

class _Logo extends React.Component<ClickElement> {
  render() {
    return <a href="#" onClick={this.props.handleClick}>
      <img src="logo.png" alt="react logo" width="40"/>
    </a>
  }
}
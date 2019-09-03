class Content extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      counter: 0,
      currentTime: new Date().toLocaleString()
    };
  }

  launchClock() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    if (this.state.counter > 2) return null;
    return React.createElement(Logger, {
      time: this.state.currentTime
    });
  }

}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock(); // set the initial state to the current time

    this.state = {
      currentTime: new Date().toLocaleString()
    };
  } // update the state every second


  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    console.log('Rendering Clock...');
    return React.createElement("div", null, this.state.currentTime);
  }

}
class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    };
  }

  startTimer = timeLeft => {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      let timeLeft = this.state.timeLeft - 1;

      if (timeLeft === 0) {
        clearInterval(timer);
      }

      this.setState({
        timeLeft,
        timer
      });
    }, 1000);
    return this.setState({
      timeLeft,
      timer
    });
  };

  render() {
    return React.createElement("div", {
      className: "row-fluid"
    }, React.createElement("h2", null, "Timer"), React.createElement("div", {
      className: "btn-group",
      role: "group"
    }, React.createElement(Button, {
      time: "5",
      startTimer: this.startTimer
    }), React.createElement(Button, {
      time: "10",
      startTimer: this.startTimer
    }), React.createElement(Button, {
      time: "15",
      startTimer: this.startTimer
    })), React.createElement(Timer, {
      timeLeft: this.state.timeLeft
    }), React.createElement("audio", {
      src: "flute_c_long_01.wav",
      id: "end-of-time",
      preload: "auto"
    }));
  }

}

class Timer extends React.Component {
  render() {
    if (this.props.timeLeft === 0) {
      document.getElementById('end-of-time').play();
    }

    if (!this.props.timeLeft) {
      return React.createElement("div", null);
    }

    return React.createElement("h1", null, "Time left: ", this.props.timeLeft);
  }

}

class Button extends React.Component {
  handleStartTimer() {
    return this.props.startTimer(parseInt(this.props.time));
  }

  render() {
    return React.createElement("button", {
      type: "button",
      className: "btn btn-dark",
      onClick: this.handleStartTimer.bind(this)
    }, this.props.time, " seconds");
  }

}

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('timer-app'));
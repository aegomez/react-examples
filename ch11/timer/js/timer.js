const Button = props => {
  function handleAction() {
    return props.action(props.time || 0, true);
  }

  return React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: handleAction
  }, props.text ? props.text : props.time + ' seconds');
};
const Timer = props => {
  if (props.timeLeft === 0) {
    props.action();
  }

  if (!props.timeLeft) {
    return React.createElement("div", null);
  }

  return React.createElement("h1", null, "Time left: ", props.timeLeft);
};
const Slider = props => {
  let value = props.value || 0;
  let max = props.max || 10;
  let width = `${100 * value / max}%`;
  return React.createElement("div", {
    className: "progress"
  }, React.createElement("div", {
    className: "progress-bar",
    role: "progressbar",
    style: {
      width
    },
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-valuenow": value
  }));
};
const Sound = props => {
  return React.createElement("audio", {
    src: props.src,
    id: "end-of-time",
    preload: "auto"
  });
};
class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null,
      paused: false,
      originalTime: null
    };
  }

  startTimer = (timeLeft, setOriginal) => {
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
      timer,
      paused: false,
      originalTime: setOriginal ? timeLeft : this.state.originalTime
    });
  };
  pauseTimer = () => {
    if (!this.state.timeLeft) {
      return this.setState({
        paused: false
      });
    }

    if (this.state.paused) {
      return this.startTimer(this.state.timeLeft);
    }

    clearInterval(this.state.timer);
    this.setState({
      paused: true
    });
  };
  cancelTimer = () => {
    if (!this.state.timeLeft) return;
    if (!window.confirm('Cancel the timer?')) return;
    clearInterval(this.state.timer);
    this.setState({
      timeLeft: null,
      paused: false,
      originalTime: 0
    });
  };
  resetTimer = () => {
    if (!this.state.timeLeft) return;
    if (!window.confirm('Reset to original time?')) return;
    this.startTimer(this.state.originalTime);
  };
  playAudio = () => {
    document.getElementById('end-of-time').play();
  };

  render() {
    return React.createElement("div", {
      className: "row-fluid"
    }, React.createElement("h2", null, "Timer"), React.createElement("div", {
      className: "btn-group",
      role: "group"
    }, [5, 10, 15].map((t, i) => React.createElement(Button, {
      time: t,
      key: i,
      action: this.startTimer
    }))), React.createElement(Timer, {
      timeLeft: this.state.timeLeft,
      action: this.playAudio
    }), React.createElement(Sound, {
      src: "flute_c_long_01.wav"
    }), React.createElement("br", null), React.createElement(Slider, {
      max: this.state.originalTime,
      value: this.state.timeLeft
    }), React.createElement("br", null), React.createElement("div", {
      className: "btn-group"
    }, React.createElement(Button, {
      text: this.state.paused ? 'Resume' : 'Pause',
      action: this.pauseTimer
    }), React.createElement(Button, {
      text: "Cancel",
      action: this.cancelTimer
    }), React.createElement(Button, {
      text: "Reset",
      action: this.resetTimer
    })));
  }

}

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('timer-app'));

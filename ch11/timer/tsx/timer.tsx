type TimeLeft = number | null;

interface WrapperStates {
  timeLeft: TimeLeft;
  timer: number | null;
}

interface TimerProps {
  timeLeft: TimeLeft;
}

interface ButtonProps {
  time: string;
  startTimer: (timeLeft: TimeLeft) => void;
}

class TimerWrapper extends React.Component<{}, WrapperStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    };
  }

  startTimer = (timeLeft: TimeLeft) => {
    clearInterval(this.state.timer as number);

    let timer = setInterval((() => {
      let timeLeft = (this.state.timeLeft as number) - 1;
      if (timeLeft === 0) {
        clearInterval(timer);
      }
      this.setState({
        timeLeft,
        timer
      });
    }) as TimerHandler, 1000);

    return this.setState({
      timeLeft,
      timer
    });
  }

  render() {
    return (
      <div className='row-fluid'>
        <h2>Timer</h2>
        <div className='btn-group' role='group'>
          <Button time='5'  startTimer={this.startTimer} />
          <Button time='10' startTimer={this.startTimer} />
          <Button time='15' startTimer={this.startTimer} />
        </div>
        <Timer timeLeft={this.state.timeLeft} />
        <audio src='flute_c_long_01.wav'
          id='end-of-time' preload='auto' />
      </div>
    );
  }
}

class Timer extends React.Component<TimerProps> {
  render() {
    if (this.props.timeLeft === 0) {
      (document.getElementById('end-of-time') as HTMLAudioElement)
        .play();
    }
    if (!this.props.timeLeft) {
      return <div />
    }
    return <h1>Time left: {this.props.timeLeft}</h1>
  }
}

class Button extends React.Component<ButtonProps> {
  handleStartTimer() {
    return this.props.startTimer(parseInt(this.props.time));
  }

  render() {
    return <button
      type='button'
      className='btn btn-dark'
      onClick={this.handleStartTimer.bind(this)}>
        {this.props.time} seconds
      </button>
  }
}

ReactDOM.render(
  <TimerWrapper />,
  document.getElementById('timer-app')
);
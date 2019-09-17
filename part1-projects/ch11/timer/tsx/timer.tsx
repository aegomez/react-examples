class TimerWrapper extends React.Component<{}, WrapperStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null,
      paused: false,
      originalTime: null
    };
  }

  startTimer = (timeLeft: TimeLeft, setOriginal?: boolean) => {
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
      timer,
      paused: false,
      originalTime: setOriginal ? timeLeft : this.state.originalTime
    });
  }

  pauseTimer = () => {
    if (!this.state.timeLeft) {
      return this.setState({
        paused: false
      });
    }
    if (this.state.paused) {
      return this.startTimer(this.state.timeLeft);
    }
    clearInterval(this.state.timer as number);
    this.setState({
      paused: true
    });
  }

  cancelTimer = () => {
    if (!this.state.timeLeft) return;

    if (!window.confirm('Cancel the timer?')) return;

    clearInterval(this.state.timer as number);
    this.setState({
      timeLeft: null,
      paused: false,
      originalTime: 0
    });
  }

  resetTimer = () => {
    if (!this.state.timeLeft) return;

    if (!window.confirm('Reset to original time?')) return;

    this.startTimer(this.state.originalTime);
  }

  playAudio = () => {
    (document.getElementById('end-of-time') as HTMLAudioElement)
      .play();
  }

  render() { 
    return (
      <div className='row-fluid'>
        <h2>Timer</h2>
        <div className='btn-group' role='group'>
          {[5, 10, 15].map((t, i) =>
            <Button time={t} key={i} action={this.startTimer}/>
          )}
        </div>
        <Timer timeLeft={this.state.timeLeft} action={this.playAudio}/>
        <Sound src='flute_c_long_01.wav' />
        <br/>
        <Slider max={this.state.originalTime} value={this.state.timeLeft}/>
        <br/>
        <div className="btn-group">
          <Button text={this.state.paused ? 'Resume': 'Pause'}
            action={this.pauseTimer} />
          <Button text='Cancel' action={this.cancelTimer} />
          <Button text='Reset' action={this.resetTimer} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TimerWrapper />,
  document.getElementById('timer-app')
);
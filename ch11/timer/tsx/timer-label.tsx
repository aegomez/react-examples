const Timer: React.FC<TimerProps> = (props: TimerProps) => {
  if (props.timeLeft === 0) {
    props.action();
  }
  if (!props.timeLeft) {
    return <div />
  }
  return <h1>Time left: {props.timeLeft}</h1>
};
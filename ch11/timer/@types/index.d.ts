type TimeLeft = number | null;

interface WrapperStates {
  timeLeft: TimeLeft;
  timer: number | null;
  paused: boolean;
  originalTime: TimeLeft;
}

interface TimerProps {
  timeLeft: TimeLeft;
  action: () => void;
}

interface ButtonProps {
  text?: string;
  time?: number;
  action: (timeLeft: TimeLeft, setOriginal?: boolean) => void;
}

interface SoundProps {
  src: string;
}

interface SliderProps {
  max: TimeLeft;
  value: TimeLeft;
}
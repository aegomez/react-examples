const Sound: React.FC<SoundProps> = (props: SoundProps) => {
  return <audio src={props.src} id='end-of-time' preload='auto' />
};
const Slider: React.FC<SliderProps> = (props: SliderProps) => {
  let value = props.value || 0;
  let max = props.max || 10;
  let width = `${100 * value / max}%`;

  return <div className='progress'>
    <div className='progress-bar'
      role='progressbar'
      style={{width}}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value} />
  </div>
}; 
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  function handleAction() {
    return props.action(props.time || 0, true);
  }
  return <button
    type='button'
    className='btn btn-primary'
    onClick={handleAction}>
      {props.text ? props.text : props.time + ' seconds'}
    </button>
}
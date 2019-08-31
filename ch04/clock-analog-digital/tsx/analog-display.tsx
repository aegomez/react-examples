const AnalogDisplay = function(props: DisplayProps) {
  // convert the string date into an object
  let date = new Date(props.time);
  // css properties
  let dialStyle: React.CSSProperties = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 200,
    border: '4px solid black'
  };
  let secondHandStyle: React.CSSProperties = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + 
      ((date.getSeconds() / 60) * 360 - 90 ).toString()
      + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  };
  let minuteHandStyle: React.CSSProperties = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + 
      ((date.getMinutes() / 60) * 360 - 90 ).toString()
      + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };
  let hourHandStyle: React.CSSProperties = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: 'rotate(' + 
      ((date.getHours() / 12) * 360 - 90 ).toString()
      + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };

  return (
    <div style={dialStyle}>
      <div style={secondHandStyle} />
      <div style={minuteHandStyle} />
      <div style={hourHandStyle} />
    </div>
  );
};
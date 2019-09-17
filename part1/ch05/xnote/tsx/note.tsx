type NoteProps = {
  secondsLeft: number
}

class Note extends React.Component<NoteProps> {
  confirmLeave(ev: BeforeUnloadEvent) {
    // Cancel the event as stated by the standard
    ev.preventDefault();
    let confirmationMessage = 'Do you really want to close?';
    // Gecko, Trident, Chrome 34+
    ev.returnValue = confirmationMessage;
    // Gecko, Webkit, Chrome <34
    return confirmationMessage;
  }

  componentDidMount() {
    console.log('Attaching confirmLeave event listener for beforeunload');
    window.addEventListener('beforeunload', this.confirmLeave);
  }

  componentWillUnmount() {
    console.log('Removing confirmLeave event listener for beforeunload');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }

  render() {
    console.log('Render');
    return <div>
      Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)
    </div>
  }
}
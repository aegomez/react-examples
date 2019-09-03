class Note extends React.Component {
  confirmLeave(ev) {
    // Cancel the event as stated by the standard
    ev.preventDefault();
    let confirmationMessage = 'Do you really want to close?'; // Gecko, Trident, Chrome 34+

    ev.returnValue = confirmationMessage; // Gecko, Webkit, Chrome <34

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
    return React.createElement("div", null, "Here will be our input field for notes (parent will remove in ", this.props.secondsLeft, " seconds)");
  }

}
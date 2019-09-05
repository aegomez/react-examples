class Account extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      accountNumber: ''
    };
  }

  handleChange(event) {
    /* Output the unfiltered value as it was typed */
    console.log('Typed:', event.target.value);
    /* Filter the value and uptate the state */

    this.setState({
      accountNumber: event.target.value.replace(/\D/ig, '')
    });
  }
  /* render a controlled element */


  render() {
    return React.createElement("div", null, "Account Number:", React.createElement("input", {
      type: "text",
      onChange: this.handleChange,
      placeholder: "123456",
      value: this.state.accountNumber
    }), React.createElement("br", null), React.createElement("span", null, this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber : ''));
  }

}
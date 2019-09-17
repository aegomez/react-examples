type AccountState = {
  accountNumber: string;
}

class Account extends React.Component<{}, AccountState> {
  constructor(props: {}) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      accountNumber: ''
    };
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    /* Output the unfiltered value as it was typed */
    console.log('Typed:', event.target.value);
    /* Filter the value and uptate the state */
    this.setState({
      accountNumber: event.target.value.replace(/\D/ig, '')
    });
  }

  /* render a controlled element */
  render() {
    return <div>
      Account Number:
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="123456"
        value={this.state.accountNumber} />
      <br/>
      <span>{this.state.accountNumber.length > 0 ?
        'You entered: ' + this.state.accountNumber :
        ''}</span>
    </div>
  }
}
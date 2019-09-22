import axios from 'axios';
import React from 'react';

const URL = 'http://localhost:3000/messages';

const MessageList: React.FC<ListProps> = props => {
  const { messages } = props;

  if (!messages || messages.length === 0) {
    return <p>No messages yet</p>
  }

  return (
    <table className="table">
      <caption>Messages</caption>
      <thead>
        <tr>
          <th className="span2">Name</th>
          <th className="span10">Message</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(message => (
          <tr>
            <td className="span2">{message.name}</td>
            <td className="span10">{message.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

class NewMessage extends React.Component<NewProps, NewState> {
  readonly state: NewState = {
    invalid: false
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    
    let name = (formData.get('username') as String).trim();
    let message = (formData.get('message') as String).trim();
    
    if (!name || !message) {
      return this.setState({
        invalid: true
      });
    }
    
    this.props.addMessageCallback({
      name,
      message
    });
    this.setState({
      invalid: false
    });
  }

   render() {
    const formClass = 'well form-inline'
      + this.state.invalid ? ' invalid' : '';

    return (
      <div className="row-fluid" id="new-message">
        <div className="span12">
          <form
            className={formClass}
            onSubmit={this.handleSubmit}>
            <input type="text"
              name="username"
              className="input-small"
              placeholder="Azat" />
            <input type="text"
              name="message"
              className="input-small"
              placeholder="Hello!" />
            <input type="submit"
              id="send"
              className="btn btn-primary"
              /* onClick={this.addMessage} */ />
            {'POST'}
          </form>
        </div>
      </div>
    );
  }
}

class MessageBoard extends React.Component<BoardProps, BoardState> {
  readonly state: BoardState = {
    messages: this.props.messages
  }

  componentDidMount() {
    axios.get(URL)
      .then(response => response.data)
      .then(messages => {
        console.log('didMount', messages);
        if(!messages || !messages.length){
          return;
        }
        this.setState({ messages });
      })
      .catch(err => console.error('Failed to GET data', err));
  }
  addMessage = (message: Message) => {
    let messages = this.state.messages;
    axios.post(URL, message)
      .then(result => result.data)
      .then((data) =>{
        if(!data){
          return console.error('Failed to save');
        }
        console.log('Saved!');
        messages.unshift(data);
        this.setState({ messages });
      })
      .catch(err => console.error('Failed to POST data', err));
  }
  render() {
    return (
      <div>
        <NewMessage messages={this.state.messages} addMessageCallback={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default MessageBoard;
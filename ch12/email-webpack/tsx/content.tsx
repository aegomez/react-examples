import React = require('react');

class Content extends React.Component {
  public prompt: string;
  public emailAddress: React.RefObject<HTMLInputElement>;
  public comments: React.RefObject<HTMLTextAreaElement>;

  constructor(props: {}) {
    super(props);
    this.prompt = 'Please enter your email to win $1,000,000.';
    this.emailAddress = React.createRef();
    this.comments = React.createRef();
  }

  submit = () => {
    let emailAddress = this.emailAddress.current!;
    let comments = this.comments.current!;
    console.log(emailAddress.value);
    console.log(comments.value);
  }

  render () {
    return (
      <div className='well'>
        <p>{this.prompt}</p>
        <div className="form-group">
          Email: <input type="text"
            ref={this.emailAddress}
            className='form-control'
            placeholder='foo@acme.org'/>
        </div>
        <div className="form-group">
          Comments: <textarea
            ref={this.comments}
            className='form-control'
            placeholder='I like your website'/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary"
            defaultValue='submit'
            onClick={this.submit}>Submit</a>
        </div>
      </div>
    );
  }
}

export = Content;
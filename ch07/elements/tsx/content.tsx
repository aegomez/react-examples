type RadioGroup = 'angular' | 'react' | 'polymer';
type CheckboxGroup = 'node' | 'react' | 'express' | 'mongodb';

type FormProps = {
  ['data-url']: string;
}

type FormState = {
  description: string;
  radioGroup: Record<RadioGroup, boolean>;
  checkboxGroup: Record<CheckboxGroup, boolean>;
  selectedValue: string;
  firstName?: string;
}

class Content extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.state = {
      description: `With the right pattern, applications will be more scalable and easier to maintain.
      If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
      // set the default checked radio button
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      },
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      },
      // set drop-down menu's preselected value
      selectedValue: 'node'
    };
  }

  handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    // erase other radios
    let obj = {} as FormState['radioGroup'];
    // get a boolean that indicates wheter this radio button is selected
    obj[event.target.value as RadioGroup] = event.target.checked;
    this.setState({
      radioGroup: obj
    });
  }

  handleCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    // clone the previous state to avoid potential conflicts
    let obj = Object.assign(this.state.checkboxGroup);
    // merge the previous state with the new checkbox value
    obj[event.target.value as CheckboxGroup] = event.target.checked;
    this.setState({
      checkboxGroup: obj
    });
  }

  // type fix because TextArea doesn't have 'checked' prop
  handleChange(event: React.ChangeEvent) {
    let target = event.target as HTMLInputElement;
    console.log('onChange event:', target.value,
      target.checked);
  }

  handleInput(event: React.FormEvent<HTMLInputElement>) {
    // when using FormEvent<T> type, try 'currentTarget'
    // instead of 'target' to get access to <T>
    // properties such as value, checked...
    console.log('onInput event:', event.currentTarget.value,
      event.currentTarget.checked);
  }

  handleSubmit(event: React.MouseEvent | React.FormEvent) {
    let target = event.target as HTMLInputElement;
    console.log('onSubmit:', target.value, target.checked);

    fetch(this.props['data-url'], {
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(data => console.log('Submitted: ', data))
    .catch(err => console.error('Could not submit form', err));
  }

  handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      selectedValue: event.target.value
    });
    console.log('onChange select:', event.target.value,
      event.target.selectedIndex, event.target.selectedOptions);
  }

  handleFirstNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      firstName: event.target.value
    });
  }

  render() {
    return <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h2>input: text</h2>
        <input type="text"
          name="new-book-title"
          defaultValue="Node: The Best Parts" />
        <hr/>

        <h2>input: password</h2>
        <input type="password"
          defaultValue="123456"
          onChange={this.handleChange} // preferred event handler
          onInput={this.handleInput} />
        <hr/>

        <h2>input: radio</h2>
        <label>
          <input type="radio"
            name="radioGroup"
            value="angular"
            checked={this.state.radioGroup.angular}
            onChange={this.handleRadio} />
          Angular
        </label>
        <br/>
        <label>
          <input type="radio"
            name="radioGroup"
            value="react"
            checked={this.state.radioGroup.react}
            onChange={this.handleRadio} />
          React
        </label>
        <br/>
        <label>
          <input type="radio"
            name="radioGroup"
            value="polymer"
            checked={this.state.radioGroup.polymer}
            onChange={this.handleRadio} />
          Polymer
        </label>
        <hr/>
        
        <h2>input: checkbox</h2>
        <label>
          <input type="checkbox"
            name="checkboxGroup"
            value="node"
            checked={this.state.checkboxGroup.node}
            onChange={this.handleCheckbox} />
          Node
        </label>
        <br/>
        <label>
          <input type="checkbox"
            name="checkboxGroup"
            value="react"
            checked={this.state.checkboxGroup.react}
            onChange={this.handleCheckbox} />
          React
        </label>
        <br/>
        <label>
          <input type="checkbox"
            name="checkboxGroup"
            value="express"
            checked={this.state.checkboxGroup.express}
            onChange={this.handleCheckbox} />
          Express
        </label>
        <br/>
        <label>
          <input type="checkbox"
            name="checkboxGroup"
            value="mongodb"
            checked={this.state.checkboxGroup.mongodb}
            onChange={this.handleCheckbox} />
          MongoDB
        </label>
        <hr/>

        <textarea
          name="description"
          cols={30} rows={10}
          defaultValue={this.state.description}  // avoid setting the value as inner HTML/text
          onChange={this.handleChange} />
        <hr/>
        <textarea
          name="description1"
          cols={30} rows={10}
          defaultValue={"Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js,\nthe fleixible Node.js framework"}
          onChange={this.handleChange} />
        <hr/>
        
        {/* render a drop-down menu */}
        <select
          value={this.state.selectedValue}
          onChange={this.handleSelectChange}>
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>
        <hr/>
        {/* render a multiselect element with 2 preselects */}
        <select
          multiple={true}
          defaultValue={['meteor', 'react']}>
          <option value="meteor">Meteor</option>
          <option value="react">React</option>
          <option value="jQuery">jQuery</option>
        </select>
        <hr/>

        <h2>input: first name</h2>
        <input type="text"
          name="first-name"
          onChange={this.handleFirstNameChange} />
        <hr/>

        <h2>input: button</h2>
        <input type="button"
          defaultValue="Send"
          onClick={this.handleSubmit} />
        <hr/>
        <input type="text" name="title" value="Mr." readOnly/>
      </form>
    </div>
  }
}
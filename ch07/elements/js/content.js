class Content extends React.Component {
  constructor(props) {
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
      radioGroup: {
        angular: false,
        react: true,
        polymer: true
      },
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      },
      selectedValue: 'node'
    };
  }

  handleRadio(event) {
    let obj = {};
    obj[event.target.value] = event.target.checked;
    this.setState({
      radioGroup: obj
    });
  }

  handleCheckbox(event) {
    let obj = this.state.checkboxGroup;
    obj[event.target.value] = event.target.checked;
    this.setState({
      checkboxGroup: obj
    });
  } // type fix because TextArea doesn't have 'checked' prop


  handleChange(event) {
    let target = event.target;
    console.log('onChange event:', target.value, target.checked);
  }

  handleInput(event) {
    // when using FormEvent<T> type, try 'currentTarget'
    // instead of 'target' to get access to <T>
    // properties such as value, checked...
    console.log('onInput event:', event.currentTarget.value, event.currentTarget.checked);
  }

  handleSubmit(event) {
    let target = event.target;
    console.log('onSubmit:', target.value, target.checked);
    fetch(this.props['data-url'], {
      method: 'POST',
      body: JSON.stringify(this.state)
    }).then(response => response.json()).then(data => console.log('Submitted: ', data)).catch(err => console.error('Could not submit form', err));
  }

  handleSelectChange(event) {
    this.setState({
      selectedValue: event.target.value
    });
    console.log('onChange select:', event.target.value, event.target.selectedIndex, event.target.selectedOptions);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  render() {
    return React.createElement("div", {
      className: "container"
    }, React.createElement("form", {
      onSubmit: this.handleSubmit
    }, React.createElement("h2", null, "input: text"), React.createElement("input", {
      type: "text",
      name: "new-book-title",
      defaultValue: "Node: The Best Parts"
    }), React.createElement("hr", null), React.createElement("h2", null, "input: password"), React.createElement("input", {
      type: "password",
      defaultValue: "123456",
      onChange: this.handleChange,
      onInput: this.handleInput
    }), React.createElement("hr", null), React.createElement("h2", null, "input: radio"), React.createElement("label", null, React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "angular",
      checked: this.state.radioGroup.angular,
      onChange: this.handleRadio
    }), "Angular"), React.createElement("br", null), React.createElement("label", null, React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "react",
      checked: this.state.radioGroup.react,
      onChange: this.handleRadio
    }), "React"), React.createElement("br", null), React.createElement("label", null, React.createElement("input", {
      type: "radio",
      name: "radioGroup",
      value: "polymer",
      checked: this.state.radioGroup.polymer,
      onChange: this.handleRadio
    }), "Polymer"), React.createElement("hr", null), React.createElement("h2", null, "input: checkbox"), React.createElement("label", null, React.createElement("input", {
      type: "checkbox",
      name: "checkboxGroup",
      value: "node",
      checked: this.state.checkboxGroup.node,
      onChange: this.handleCheckbox
    }), "Node"), React.createElement("br", null), React.createElement("label", null, React.createElement("input", {
      type: "checkbox",
      name: "checkboxGroup",
      value: "react",
      checked: this.state.checkboxGroup.react,
      onChange: this.handleCheckbox
    }), "React"), React.createElement("br", null), React.createElement("label", null, React.createElement("input", {
      type: "checkbox",
      name: "checkboxGroup",
      value: "express",
      checked: this.state.checkboxGroup.express,
      onChange: this.handleCheckbox
    }), "Express"), React.createElement("br", null), React.createElement("label", null, React.createElement("input", {
      type: "checkbox",
      name: "checkboxGroup",
      value: "mongodb",
      checked: this.state.checkboxGroup.mongodb,
      onChange: this.handleCheckbox
    }), "MongoDB"), React.createElement("hr", null), React.createElement("textarea", {
      name: "description",
      defaultValue: this.state.description,
      onChange: this.handleChange
    }), React.createElement("hr", null), React.createElement("textarea", {
      name: "description1",
      defaultValue: "Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js,\nthe fleixible Node.js framework",
      onChange: this.handleChange
    }), React.createElement("hr", null), React.createElement("select", {
      value: this.state.selectedValue,
      onChange: this.handleSelectChange
    }, React.createElement("option", {
      value: "ruby"
    }, "Ruby"), React.createElement("option", {
      value: "node"
    }, "Node"), React.createElement("option", {
      value: "python"
    }, "Python")), React.createElement("hr", null), React.createElement("select", {
      multiple: true,
      defaultValue: ['meteor', 'react']
    }, React.createElement("option", {
      value: "meteor"
    }, "Meteor"), React.createElement("option", {
      value: "react"
    }, "React"), React.createElement("option", {
      value: "jQuery"
    }, "jQuery")), React.createElement("hr", null), React.createElement("h2", null, "input: first name"), React.createElement("input", {
      type: "text",
      name: "first-name",
      onChange: this.handleFirstNameChange
    }), React.createElement("hr", null), React.createElement("h2", null, "input: button"), React.createElement("input", {
      type: "button",
      defaultValue: "Send",
      onClick: this.handleSubmit
    }), React.createElement("hr", null), React.createElement("input", {
      type: "text",
      name: "title",
      value: "Mr."
    })));
  }

}
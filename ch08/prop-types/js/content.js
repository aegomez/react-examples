class Content2 extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(Button10, {
      buttonLabel: "Start"
    }), React.createElement(Button10, null), React.createElement(Button10, {
      email: "foo@bar.com"
    }), React.createElement(Button10, {
      email: "not-valid"
    }), React.createElement(Button11, {
      title: "1"
    }), React.createElement(Button11, {
      title: "2",
      buttonLabel: "Continue"
    }), React.createElement(Button11, {
      email: "foo@bar.com"
    }), React.createElement(Button11, {
      email: "not-valid"
    }));
  }

}
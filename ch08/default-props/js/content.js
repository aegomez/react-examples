class Content extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(Button, {
      buttonLabel: "Start"
    }), React.createElement(Button, null), React.createElement(Button, null), React.createElement(Button2, null), React.createElement(Button2, {
      buttonLabel: "FC"
    }), React.createElement(Button3, null), React.createElement(Button3, {
      buttonLabel: "TS"
    }));
  }

}
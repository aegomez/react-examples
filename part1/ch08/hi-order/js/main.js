const EnhancedButton = LoadWebsite(_Button);
const EnhancedLink = LoadWebsite(_Link);
const EnhancedLogo = LoadWebsite(_Logo);

class Main extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement(EnhancedButton, null), React.createElement("br", null), React.createElement("br", null), React.createElement(EnhancedLink, null), React.createElement("br", null), React.createElement("br", null), React.createElement(EnhancedLogo, null), React.createElement("br", null), React.createElement("br", null), React.createElement("iframe", {
      src: "",
      id: "frame",
      width: "600",
      height: "500"
    }));
  }

}
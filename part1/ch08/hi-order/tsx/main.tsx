const EnhancedButton = LoadWebsite(_Button);
const EnhancedLink = LoadWebsite(_Link);
const EnhancedLogo = LoadWebsite(_Logo);

class Main extends React.Component {
  render() {
    return (
      <div>
        <EnhancedButton />
        <br/>
        <br/>
        <EnhancedLink />
        <br/>
        <br/>
        <EnhancedLogo />
        <br/>
        <br/>
        <iframe src="" id="frame" width="600" height="500" />
      </div>
    )
  }
}
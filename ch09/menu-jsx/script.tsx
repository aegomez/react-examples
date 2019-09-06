interface LinkXProps {
  label: string;
}

class MenuX extends React.Component {
  render() {
    let menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us'
    ];

    return (
      <div>
        {menus.map((v, i) => 
          <div key={i}><LinkX label={v} /></div>
        )}
      </div>
    );
  }
}

class LinkX extends React.Component<LinkXProps> {
  render() {
    let url = '/' + 
      this.props.label
      .toLowerCase()
      .trim()
      .replace(' ', '-');

    return (
      <div>
        <a href={url}>{this.props.label}</a>
        <br/>
      </div>
    );
  }
}

ReactDOM.render(
  <MenuX />,
  document.getElementById('menu')
);
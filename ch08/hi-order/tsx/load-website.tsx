/* Implementing a higher-order component */

interface ClickElement {
  label: string;
  handleClick: () => void;
}

interface LoadState extends ClickElement {}

type LoadProps<P> = Omit<P, keyof ClickElement>;

const LoadWebsite = <P extends {}>(Component: React.ComponentType<P>) => {
  class _LoadWebsite extends React.Component<LoadProps<P>, LoadState> {
    constructor(props: P & ClickElement) {
      super(props);
      this.state = {
        label: 'Run',
        // make sure that 'this' is always an
        // instace of this component
        handleClick: this.handleClick.bind(this)
      };
    }

    getUrl() {
      return 'http://localhost:9000/children/';
    }

    handleClick() {
      // load the React website into an iframe
      let iframe = document.getElementById('frame') as HTMLIFrameElement;
      iframe.src = this.getUrl();
    }

    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this));
    }

    render() {
      console.log(this.state);
      // pass state and props as properties using spread
      return <Component {...this.state} {...this.props as P} />
    }

    static displayName: string;
  }

  _LoadWebsite.displayName = 'EnhancedComponent';
  return _LoadWebsite;
}
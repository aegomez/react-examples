import * as React from 'react';

export interface RouterMap {
  [route: string]: JSX.Element;
}

interface RouterProps {
  mapping: RouterMap;
}

interface RouterState {
  hash: string;
}

export class Router extends React.Component<RouterProps, RouterState> {
  constructor(props: RouterProps) {
    super(props);
    this.state = {
      hash: window.location.hash
    }
  }
  
  updateHash = () => {
    this.setState({
      hash: window.location.hash
    });
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.updateHash, false);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.updateHash, false);
  }

  render() {
    return this.props.mapping[this.state.hash] || this.props.mapping['*'];
  }
}
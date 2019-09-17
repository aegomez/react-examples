import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';

class Content extends React.Component<RouteComponentProps> {
  render() {
    const linkProps = {
      className: 'nav-item nav-link',
      activeClassName: 'active'
    };
    return <div>
      <h1>Node.University</h1>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-nav">
          <NavLink to="/about" {...linkProps}>
            About</NavLink>
          <NavLink to="/posts" {...linkProps}>
            Blog</NavLink>
          <NavLink to="/contact" {...linkProps}>
            Contact Us</NavLink>
          <NavLink to="/login" {...linkProps}>
            Login</NavLink>
        </div>
      </nav>
      {this.props.children}
    </div>
  }
}

export default Content;
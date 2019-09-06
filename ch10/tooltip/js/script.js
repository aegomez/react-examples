function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: false
    };
  }

  toggle = () => {
    const {
      offsetTop: top,
      offsetLeft: left
    } = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top,
      left
    });
  };

  render() {
    const trigger = this.props.trigger || 'hover';
    const placement = this.props.placement || 'bottom';
    const vOffset = placement === 'bottom' ? 20 : -40;
    const hOffset = placement === 'bottom' ? -30 : 0;
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + vOffset,
      left: (this.state.left || 0) + hOffset
    };
    const spanProps = {};

    if (trigger === 'hover') {
      spanProps.onMouseEnter = this.toggle;
      spanProps.onMouseOut = this.toggle;
    } else if (trigger === 'click') {
      spanProps.onClick = this.toggle;
    }

    return React.createElement("div", {
      style: {
        display: 'inline'
      }
    }, React.createElement("span", _extends({
      style: {
        color: 'blue'
      }
    }, spanProps), this.props.children), React.createElement("div", {
      className: "tooltip bs-tooltip-" + placement,
      style: style,
      role: "tooltip"
    }, React.createElement("div", {
      className: "arrow"
    }), React.createElement("div", {
      className: "tooltip-inner"
    }, this.props.text)));
  }

}

ReactDOM.render(React.createElement("div", null, React.createElement("p", null, React.createElement(Tooltip, {
  trigger: "click",
  text: "The book you're reading now"
}, "React Quickly"), " was published in 2017. It's ", React.createElement(Tooltip, {
  text: "No, you are awesome!"
}, "awesome"), "!"), React.createElement("p", null, React.createElement(Tooltip, {
  placement: "bottom",
  trigger: "hover",
  text: "Looks OK"
}, "Placement bottom, on hover")), React.createElement("p", null, React.createElement(Tooltip, {
  placement: "bottom",
  trigger: "click",
  text: "Looks OK"
}, "Placement bottom, on click")), React.createElement("p", null, React.createElement(Tooltip, {
  placement: "top",
  trigger: "hover",
  text: "Looks OK"
}, "Placement top, on hover")), React.createElement("p", null, React.createElement(Tooltip, {
  placement: "top",
  trigger: "click",
  text: "Looks OK"
}, "Placement top, on click"))), document.getElementById('tooltip'));
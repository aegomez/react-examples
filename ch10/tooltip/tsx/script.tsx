interface TooltipProps {
  text: string;
  trigger?: 'hover' | 'click';
  placement?: 'top' | 'bottom';
}

interface TooltipState {
  opacity: boolean;
  top?: number;
  left?: number;
}

class Tooltip extends React.Component<TooltipProps, TooltipState> {
  constructor(props: TooltipProps) {
    super(props);
    this.state = {
      opacity: false
    };
  }

  toggle = () => {
    const {
      offsetTop: top,
      offsetLeft: left
    } = ReactDOM.findDOMNode(this) as HTMLElement;

    this.setState({
      opacity: !this.state.opacity,
      top,
      left
    });
  }

  render() {
    const trigger = this.props.trigger || 'hover';
    const placement = this.props.placement || 'bottom';

    const vOffset = placement === 'bottom' ? 20 : -40;
    const hOffset = placement === 'bottom' ? -30 : 0;
    
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + vOffset,
      left: (this.state.left || 0) + hOffset
    };

    const handlers: React.DOMAttributes<HTMLSpanElement> = {};
    
    if (trigger === 'hover') {
      handlers.onMouseEnter = this.toggle;
      handlers.onMouseOut = this.toggle;
    }
    else if (trigger === 'click') {
      handlers.onClick = this.toggle;
    }

    return (
      <div style={{display: 'inline'}}>
        <span
          style={{color: 'blue'}}
          {...handlers} >
          {this.props.children}
        </span>
        <div
          className={"tooltip bs-tooltip-" + placement}
          style={style}
          role="tooltip">
          <div className="arrow"></div>
          <div className="tooltip-inner">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <p>
      <Tooltip trigger="click" text="The book you're reading now">React Quickly</Tooltip> was published in 2017. It's <Tooltip text="No, you are awesome!">awesome</Tooltip>!
    </p>
    <p>
      <Tooltip placement="bottom" trigger="hover" text="Looks OK">Placement bottom, on hover</Tooltip>
    </p>
    <p>
      <Tooltip placement="bottom" trigger="click" text="Looks OK">Placement bottom, on click</Tooltip>
    </p>
    <p>
      <Tooltip placement="top" trigger="hover" text="Looks OK">Placement top, on hover</Tooltip>
    </p>
    <p>
      <Tooltip placement="top" trigger="click" text="Looks OK">Placement top, on click</Tooltip>
    </p>
  </div>,
  document.getElementById('tooltip')
);
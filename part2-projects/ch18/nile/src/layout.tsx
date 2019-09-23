import React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";

import Modal from './modal';

const Heading: React.FC = () => (
  <h1 className="card-title">Nile Book Store</h1>
);

interface Props extends RouteComponentProps {}

interface State {
  isModal: boolean;
  previousChildren: React.ReactNode;
}

class Layout extends React.Component<Props, State> {
  readonly state: State = {
    isModal: false,
    previousChildren: this.props.children
  };

  componentWillReceiveProps(nextProps: Props) {
    this.state.isModal = (nextProps.location.state
      && nextProps.location.state.modal);
    if (this.state.isModal
      && nextProps.location.key !== this.props.location.key) {
      this.state.previousChildren = this.props.children;
    }
  }

  render() {
    console.log('Modal: ', this.state.isModal);
    const modalProps = {
      isOpen: true,
      returnTo: this.props.location.state
        ? this.props.location.state.returnTo
        : ''
    };
    return (
      <div className="card card-body bg-light">
        <Heading />
        <div>
          {(this.state.isModal)
            ? this.state.previousChildren
            : this.props.children
          }

          {(this.state.isModal)
            ? <Modal {...modalProps}>
                {this.props.children}
              </Modal>
            : ''
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  isOpen:  boolean;
  returnTo: string;
};

const Modal: React.FC<Props> = ({ children, returnTo }) => {
  const styles: React.CSSProperties = {
    position: 'fixed',
    top: '20%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    width: 450,
    height: 400,
    padding: 20,
    boxShadow: '0 0 150px 130px rgba(0, 0, 0, 0.5)',
    overflow: 'auto',
    background: '#fff'
  };

  return (
    <div style={styles}>
      <p>
        <Link to={returnTo}>
          Back
        </Link>
      </p>
      {children}
    </div>
  );
};

export default Modal;
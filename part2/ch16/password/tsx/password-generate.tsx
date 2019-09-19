import React from 'react';

import { GenerateProps as Props } from './types';

const PasswordGenerate: React.FC<Props> = props => {
  const { children, ...rest } = props;
  return <button {...rest} className="btn btn-light generate-btn">
    {children}
  </button>
};

export default PasswordGenerate;
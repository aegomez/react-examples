import React from 'react';

import { VisibilityProps as Props } from './types';

const PasswordVisibility: React.FC<Props> = props => {
  let {children, ...rest} = props;
  return <label className="form-control">
    <input type="checkbox" {...rest} />
    {' Show password'}
  </label>
};

export default PasswordVisibility;
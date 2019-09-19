import React from 'react';

import { ChangeEvent } from './types';

type Props = {
  visible: boolean;
  name: string;
  value: string;
  onChange: (event: ChangeEvent) => void;
};

const PasswordInput: React.FC<Props> = props => {
  const { children, visible, ...rest } = props;
  return <input
    type={visible ? 'text' : 'password'}
    className="form-control"
    {...rest} />
};

export default PasswordInput;
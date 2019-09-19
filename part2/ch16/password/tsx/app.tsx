import React from 'react';
import { render } from 'react-dom';

import Password from './password';

render(
  <Password 
    upperCase={true}
    lowerCase={true}
    special={true}
    number={true}
    over6={true} />,
  document.getElementById('password')
);

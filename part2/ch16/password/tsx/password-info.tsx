import React from 'react';

import { InfoProps as Props } from './types';

const PasswordInfo: React.FC<Props> = props => (
  <div>
    <h4>Password Strength</h4>
    <ul>
      {props.rules.map(processedRule => {
        let { isCompleted, key, rule: {message} } = processedRule;
        
        if (isCompleted)
          return <li key={key}><s>{message}</s></li>
        else
          return <li key={key}>{message}</li>
      })}
    </ul>
  </div>
);

export default PasswordInfo;
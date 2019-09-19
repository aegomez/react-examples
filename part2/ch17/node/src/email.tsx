import React = require('react');

type Props = {
  name: string;
};

const Email: React.FC<Props> = (props) => (
  <div>
    <h1>Thank you {(props.name) ? props.name : ''}for signing up!</h1>
    <p>If you have any questions, please contact support</p>
  </div>
);

export = Email;


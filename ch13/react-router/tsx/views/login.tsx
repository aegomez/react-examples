import React from 'react';

const Login: React.FC = () => (
  <div>
    <h3>Login</h3>
    <input type="text"
      placeholder="email"
      className="form-control" />
    <input type="password"
      placeholder="password"
      className="form-control" />
  </div>
);

export default Login;
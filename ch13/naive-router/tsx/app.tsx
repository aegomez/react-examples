import * as React from 'react';
import { render } from 'react-dom';
import { Router, RouterMap } from './router';

const mapping: RouterMap = {
  '#profile': <div>Profile (<a href="#">home</a>)</div>,
  '#accounts': <div>Accounts (<a href="#">home</a>)</div>,
  '*': <div>Dashboard<br/>
    <a href="#profile">Profile</a>
    <br/>
    <a href="#accounts">Accounts</a>
  </div>
};

render(
  <Router mapping={mapping} />,
  document.getElementById('content')
);
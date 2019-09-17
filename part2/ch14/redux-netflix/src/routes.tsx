import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app/app';

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>
);

export default routes;

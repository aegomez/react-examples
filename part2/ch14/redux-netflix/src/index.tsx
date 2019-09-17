import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './modules/store';
import routes from './routes';

export default render((
  <Provider store={store}>
    {routes}
  </Provider>
), document.getElementById('app'));

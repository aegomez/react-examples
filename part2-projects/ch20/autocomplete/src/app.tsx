import React from 'react';
import { hydrate } from 'react-dom';

import Autocomplete from './autocomplete';

declare const __autocomplete_data: {
  rooms: Room[];
  url: string;
};

const { rooms, url } = __autocomplete_data;

hydrate(
  <Autocomplete
    options={rooms}
    url={url} />,
  document.getElementById('autocomplete')
);
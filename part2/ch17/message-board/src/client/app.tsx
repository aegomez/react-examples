/// <reference path="../@types/global.d.ts" />

import React from 'react';
import { hydrate } from 'react-dom';

import Header from '../components/header';
import Footer from '../components/footer';
import MessageBoard from '../components/board';

declare const messages: Message[];

hydrate(<Header/>,
  document.getElementById('header'));
hydrate(<Footer/>,
  document.getElementById('footer'));
hydrate(<MessageBoard messages={messages}/>,
  document.getElementById('message-board'));
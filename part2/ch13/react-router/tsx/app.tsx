import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Content from './content';
import About from './views/about';
import Contact from  './views/contact';
import Login from  './views/login';
import Post from  './views/post';
import PostList from  './views/postlist';

// enable resolveJsonModule flag in tsconfig.json (TS 2.9+)
import data from '../posts.json';

render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Content} />
      <Route path="/about" component={About} />
      <Route path="/posts" render={() => (
        <PostList posts={data} />
      )} />
      <Route path="/posts/:id" render={() => (
        <Post posts={data} />
      )} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById('content')
);
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Cart from './cart';
import Checkout from './checkout';
import Index from './index';
import Layout from './layout';
import Product from './product';

import PRODUCTS from '../db/products.json';

let cartItems: {
  [id: string]: number;
} = {};

const addToCart = (id: string) => {
  if (cartItems[id])
    cartItems[id] += 1;
  else
    cartItems[id] = 1;
};

render(
  <HashRouter>
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => (
            <Index
              products={PRODUCTS} />)} />
          <Route path="/products/:id" render={() => (
            <Product
              addToCart={addToCart}
              products={PRODUCTS} />)} />
          <Route path="/cart" render={() => (
            <Cart
              cartItems={cartItems}
              products={PRODUCTS} />)} />
        </Switch>
      </Layout>
      <Switch>
        <Route path="/checkout"render={() => (
          <Checkout
            cartItems={cartItems}
            products={PRODUCTS} /> )} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('content')
);
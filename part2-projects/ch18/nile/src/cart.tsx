import React from 'react';
import { Link } from 'react-router-dom';

type Product = typeof import('../db/products.json')[0];

type Props = {
  cartItems: {
    [id: string]: number;
  };
  products: Product[];
};

const Cart: React.FC<Props> = ({ cartItems, products }) => (
  <div>
    {Object.keys(cartItems).length === 0
      ? <p>Your cart is empty</p>
      : ''
    }
    <ul>
      {Object.keys(cartItems).map( item => (
        <li key={item}>
          {products[+item].title}
          - {cartItems[item]}
        </li>
      ))}
    </ul>
    <Link to="/checkout" className="btn btn-primary">
      Checkout
    </Link>
    <Link to="/" className="btn btn-info">
      Home
    </Link>
  </div>
);

export default Cart;
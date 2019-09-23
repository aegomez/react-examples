import React from 'react';

type Product = typeof import('../db/products.json')[0];

type Props = {
  cartItems: {
    [id: string]: number;
  };
  products: Product[];
};

const Checkout: React.FC<Props> = ({ cartItems, products }) => {
  let count = 0;
  return <div>
    <h1>Invoice</h1>
    <table className="table table-bordered">
      <tbody>
        {Object.keys(cartItems).map(item => {
          count += cartItems[item];
          return <tr key={item}>
            <td>{products[+item].title}</td>
            <td>{cartItems[item]}</td>
          </tr>
        })}
      </tbody>
    </table>
    <p>Total: {count}</p>
  </div>
};

export default Checkout;
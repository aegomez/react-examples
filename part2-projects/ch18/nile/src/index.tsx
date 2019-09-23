import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const Copy: React.FC = () => (
  <p>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open the book on a separate page.</p>
);

interface IndexProps extends RouteComponentProps {
  products: (typeof import('../db/products.json'));
}

const Index: React.FC<IndexProps> = ({ products, location }) => (
  <div>
    <Copy />
    <Link to="/cart" className="btn btn-danger">Cart</Link>
    <div>
      {products.map(picture => (
        <Link key={picture.id}
          to={{
            pathname: `/products/${picture.id}`,
            state: {
              modal: true,
              returnTo: location.pathname
            }
          }} >
          <img src={picture.src} alt={picture.title} style={{
            margin: 10,
            height: 100
          }}/>
        </Link>
      ))}
    </div>
  </div>
);

export default withRouter(Index);
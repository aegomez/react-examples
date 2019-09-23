import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

type MatchParams = {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  addToCart: (id: string) => void;
  products: typeof import('../db/products.json');
}

class Product extends React.Component<Props> {
  handleClick = () => {
    this.props.addToCart(this.props.match.params.id);
  }
  
  render() {
    const product = this.props.products[+this.props.match.params.id];
    return (
      <div>
        <img src={product.src}
          alt={product.title}
          style={{ height: '80%' }} />
        <p>{product.title}</p>
        <Link
          to={{
            pathname: '/cart',
            state: {
              productId: this.props.match.params.id
            }
          }}
          onClick={this.handleClick}
          className="btn btn-primary" >
            Buy
          </Link>
      </div>
    );
  }
}

export default withRouter(Product);
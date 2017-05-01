import React from 'react';

import ProductCard from './ProductCard.jsx';

export default class ProductList extends React.Component {

    render() {
        let rows = [];
        let handling = this.props.handleOnAddProduct;
        let stock = this.props.stock;

        this.props.products.forEach(function (product) {
            rows.push(<ProductCard
                key={product.id}
                product={product}
                stock={stock[product.id]}
                handleOnAddProduct={handling} />);
        });

        return (
            <div className="product-card-list">
                <h1>Product list</h1>
                <div>{rows}</div>
            </div>
        );
    }
}

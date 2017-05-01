import React from 'react';

import BasketActions from '../actions/BasketActions.jsx';

export default class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnAddProduct = this.handleOnAddProduct.bind(this);
    }

    handleOnAddProduct() {
        BasketActions.addBasket(this.props.product);
    }

    render() {

        return (
            <div className="product-card">
                <h2>{this.props.product.name}</h2>
                <div>Price: ${this.props.product.price}</div>
                <div>Stock: {this.props.stock}</div>
                { this.props.stock ?
                    <button type="button" onClick={this.handleOnAddProduct}>Add</button>
                    : <button type="button" disabled="disabled">Out of stock</button>
                }
            </div>
        );
    }
}

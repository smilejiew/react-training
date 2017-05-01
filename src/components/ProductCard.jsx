import React from 'react';

export default class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnAddProduct = this.handleOnAddProduct.bind(this);
    }

    handleOnAddProduct() {
        this.props.handleOnAddProduct(this.props.product);
    }

    render() {
        let stock = this.props.stock.stock - this.props.stock.added;

        return (
            <div className="product-card">
                <h2>{this.props.product.name}</h2>
                <div>Price: ${this.props.product.price}</div>
                <div>Stock: {stock}</div>
                { stock ?
                    <button type="button" onClick={this.handleOnAddProduct}>Add</button>
                    : <button type="button" disabled="disabled">Out of stock</button>
                }
            </div>
        );
    }
}

import React from 'react';

export default class BasketLine extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnDeleteProduct = this.handleOnDeleteProduct.bind(this);
    }

    handleOnDeleteProduct(e) {
        e.preventDefault();
        this.props.handleOnDeleteProduct(this.props.basketLine);
    }

    render() {
        return (
            <tr>
                <td>{this.props.basketLine.quantity}</td>
                <td>{this.props.basketLine.name}</td>
                <td>${this.props.basketLine.price}</td>
                <td><a href="#" onClick={this.handleOnDeleteProduct}>x</a></td>
            </tr>
        );
    }
}

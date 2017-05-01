import React from 'react';

import MiniBasket from './MiniBasket.jsx';
import ProductList from './ProductList.jsx';

export default class WebShop extends React.Component {

    constructor(props) {
        super(props);

        let stock = {};
        this.props.products.forEach(function (product) {
            stock[product.id] = {stock: product.stock, added: 0};
        });

        this.state = {
            stock: stock,
            basketLine: []
        };

        this.handleOnAddProduct = this.handleOnAddProduct.bind(this);
        this.handleOnDeleteProduct = this.handleOnDeleteProduct.bind(this);
    }

    handleOnAddProduct(product) {
        let stock = this.state.stock;
        if (stock[product.id].stock <= stock[product.id].added) {
            return;
        }

        stock[product.id].added = stock[product.id].added + 1;

        let basket = this.state.basketLine;
        let isExist = 0;

        basket.forEach(function (basketLine) {
            if (basketLine.id === product.id) {
                basketLine.quantity = basketLine.quantity + 1;

                isExist = 1;
            }
        });

        if (!isExist) {
            product.quantity = 1;
            basket.push(product);
        }

        this.setState({
            basketLine: basket,
            stock: stock
        });
    }

    handleOnDeleteProduct(product) {
        let basket = this.state.basketLine;
        let stock = this.state.stock;

        basket.forEach(function (basketLine, i) {
            if (basketLine.id === product.id) {
                basket.splice(i, 1);
                stock[product.id].added = 0;
            }
        });

        this.setState({
            basketLine: basket,
            stock: stock
        });
    }

    render() {
        return (
            <div>
                <MiniBasket
                    basketLine={this.state.basketLine}
                    handleOnDeleteProduct={this.handleOnDeleteProduct} />
                <ProductList
                    products={this.props.products}
                    stock={this.state.stock}
                    handleOnAddProduct={this.handleOnAddProduct} />
            </div>
        );
    }
}

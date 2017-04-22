import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components/App.jsx';

class ProductCard extends React.Component {

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

class ProductList extends React.Component {

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

class BasketLine extends React.Component {

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

class MiniBasket extends React.Component {
    render() {
        let rows = [];
        let total = 0;
        let handleOnDeleteProduct = this.props.handleOnDeleteProduct;
        this.props.basketLine.forEach(function (basketLine) {
            rows.push(<BasketLine basketLine={basketLine}
                key={basketLine.id}
                handleOnDeleteProduct={handleOnDeleteProduct} />);
            total = total + (basketLine.quantity * basketLine.price);
        });

        return (
            <div className="mini-basket">
                <h1>Shopping cart ({this.props.basketLine.length})</h1>
                {
                    this.props.basketLine.length > 0 &&
                    <table>
                        <thead><tr><th>Qty</th><th>Name</th><th>Price</th><th /></tr></thead>
                        <tbody>
                            {rows}
                            <tr>
                                <td colSpan="4">Total: ${total}</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

class WebShop extends React.Component {

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

const PRODUCTS = [
    {id: 1, price: 49, stock: 0, name: 'Football'},
    {id: 2, price: 9, stock: 5, name: 'Baseball'},
    {id: 3, price: 29, stock: 15, name: 'Basketball'},
    {id: 4, price: 99, stock: 5, name: 'iPod Touch'},
    {id: 5, price: 399, stock: 2, name: 'iPhone 5'},
    {id: 6, price: 199, stock: 9, name: 'Nexus 7'},
    {id: 7, price: 222, stock: 6, name: 'iPhone 7'},
    {id: 8, price: 199, stock: 9, name: 'Samsung 8'}
];

ReactDOM.render(
    <WebShop products={PRODUCTS} />,
    document.getElementById('app')
);

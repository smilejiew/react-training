import React from 'react';
import alt from '../alt.jsx';

import WebStore from '../stores/WebStore.jsx';
import ProductActions from '../actions/ProductActions.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = WebStore.getState();

        this.onChange = this.onChange.bind(this);

        //this.products = [];
        //this.bindListeners({
        //    handleUpdateProducts: ProductActions.UPDATE_PRODUCTS
        //});
    }

    componentDidMount() {
        WebStore.listen(this.onChange);
        WebStore.fetchProducts();
    }

    componentWillUnmount() {
        WebStore.listen(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        if (this.state.errorMessage) {
            return (
                <div>Something is wrong
                    <div>{this.state.errorMessage}</div>
                </div>
            );
        }

        if (!this.state.products.length) {
            return (
                <div>
                    No Products
                </div>
            )
        }

        return (
            <ul>
                {this.state.products.map((product) => {
                    return (
                        <li key={product.id} >{product.name}</li>
                    );
                })}
            </ul>
        );


        //return (
        //    <div>
        //        <MiniBasket
        //            basketLine={this.state.basketLine}
        //            handleOnDeleteProduct={this.handleOnDeleteProduct} />
        //        <ProductList
        //            products={this.props.products}
        //            stock={this.state.stock}
        //            handleOnAddProduct={this.handleOnAddProduct} />
        //    </div>
        //);
    }
}

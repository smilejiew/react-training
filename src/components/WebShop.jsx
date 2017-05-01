import React from 'react';
import alt from '../alt.jsx';

import WebStore from '../stores/WebStore.jsx';

import MiniBasket from './MiniBasket.jsx';
import ProductList from './ProductList.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = WebStore.getState();

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        WebStore.listen(this.onChange);
        WebStore.fetchProducts();
//        WebStore.testFetchData();
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
            <div>
                <MiniBasket />
                <ProductList />
            </div>
        );
    }
}

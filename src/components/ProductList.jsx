import React from 'react';

import ProductCard from './ProductCard.jsx';
import WebStore from '../stores/WebStore.jsx';

export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = WebStore.getState();

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        WebStore.listen(this.onChange);
    }

    componentWillUnmount() {
        WebStore.listen(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let rows = [];
        let allStock = this.state.stock;

        this.state.products.forEach(function (product) {

            let stock = product.stock - allStock[product.id].added;
            rows.push(<ProductCard
                key={product.id}
                product={product}
                stock={stock} />);
        });

        return (
            <div className="product-card-list">
                <h1>Product list</h1>
                <div>{rows}</div>
            </div>
        );
    }
}

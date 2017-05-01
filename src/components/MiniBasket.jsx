import React from 'react';

import BasketLine from './BasketLine.jsx';
import WebStore from '../stores/WebStore.jsx';

export default class MiniBasket extends React.Component {

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
        let total = 0;
        this.state.basketLine.forEach(function (basketLine) {
            rows.push(<BasketLine basketLine={basketLine}
                key={basketLine.id} />);
            total = total + (basketLine.quantity * basketLine.price);
        });

        return (
            <div className="mini-basket">
                <h1>Shopping cart ({this.state.basketLine.length})</h1>
                {
                    this.state.basketLine.length > 0 &&
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

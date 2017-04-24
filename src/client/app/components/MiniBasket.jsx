import React from 'react';

import BasketLine from './BasketLine.jsx';

export default class MiniBasket extends React.Component {
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

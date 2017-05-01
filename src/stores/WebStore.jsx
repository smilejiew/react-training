import alt from '../alt.jsx';

import BasketActions from '../actions/BasketActions.jsx';
import WebshopSource from '../sources/WebshopSource.jsx';

class WebStore {
    constructor() {
        this.products = [];
        this.basketLine = [];
        this.stock = {};
        this.errorMessage = null;

        this.bindListeners({
//            handleExternalSource: BasketActions.EXTERNAL_SOURCE,
//            handleExternalSourceError: BasketActions.EXTERNAL_SOURCE_ERROR,

            handleUpdateProducts: BasketActions.UPDATE_PRODUCTS,
            handleFetchProducts: BasketActions.FETCH_PRODUCTS,
            handleFetchProductsFailed: BasketActions.FETCH_PRODUCTS_FAILED,
            handleAddBasket: BasketActions.ADD_BASKET,
            handleDeleteBasket: BasketActions.DELETE_BASKET
        });

        this.exportAsync(WebshopSource);
    }


//    handleExternalSource(externalSource) {
//        console.log(externalSource);
//
//    }
//
//    handleExternalSourceError(errorMessage) {
//        console.log(errorMessage);
//    }

    handleUpdateProducts(products) {
        this.products = products;
        this.errorMessage = null;


        let initStock = {};
        this.products.forEach(function (product) {
            initStock[product.id] = {stock: product.stock, added: 0};
        });
        this.stock = initStock;
    }

    handleFetchProducts() {
        this.products = [];
    }

    handleFetchProductsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }

    handleAddBasket(product) {

        if (this.stock[product.id].stock <= this.stock[product.id].added) {
            return;
        }

        let basket = this.basketLine;
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

        // update stock
        this.stock[product.id].added = this.stock[product.id].added + 1;

        // update basket
        this.basketLine = basket;

    }

    handleDeleteBasket(product) {
        let basket = this.basketLine;
        let stock = this.stock;

        basket.forEach(function (basketLine, i) {
            if (basketLine.id === product.id) {
                basket.splice(i, 1);
                stock[product.id].added = 0;
            }
        });

        this.basketLine = basket;
        this.stock = stock;
    }

}

export default alt.createStore(WebStore);

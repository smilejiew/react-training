import alt from '../alt.jsx';

import ProductActions from '../actions/ProductActions.jsx';
import WebshopSource from '../sources/WebshopSource.jsx';

class WebStore {
    constructor() {
        this.products = [];
        this.errorMessage = null;
        this.bindListeners({
            handleUpdateProducts: ProductActions.UPDATE_PRODUCTS,
            handleFetchProducts: ProductActions.FETCH_PRODUCTS,
            handleFetchProductsFailed: ProductActions.FETCH_PRODUCTS_FAILED
        });

        this.exportAsync(WebshopSource);
    }

    handleUpdateProducts(products) {
        this.products = products;
        this.errorMessage = null;
    }

    handleFetchProducts() {
        // reset the array while we're fetching new locations so React can
        // be smart and render a spinner for us since the data is empty.
        this.products = [];
    }

    handleFetchProductsFailed(errorMessage) {
        // reset the array while we're fetching new locations so React can
        // be smart and render a spinner for us since the data is empty.
        this.errorMessage = errorMessage;
    }
}

export default alt.createStore(WebStore);

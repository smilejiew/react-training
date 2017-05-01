import alt from '../alt.jsx';

class ProductActions {

    fetchProducts() {
        return [];
    }

    updateProducts(products) {
        return products;
    }

    fetchProductsFailed(errorMessage) {
        return errorMessage;
    }
}

export default alt.createActions(ProductActions);

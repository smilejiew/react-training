import alt from '../alt.jsx';

class BasketActions {

//    externalSource(externalSource) {
//        return externalSource;
//    }
//
//    externalSourceError(errorMessage) {
//        return errorMessage;
//    }

    fetchProducts() {
        return [];
    }

    updateProducts(products) {
        return products;
    }

    fetchProductsFailed(errorMessage) {
        return errorMessage;
    }

    addBasket(product) {
        return product;
    }

    deleteBasket(product) {
        return product;
    }
}

export default alt.createActions(BasketActions);

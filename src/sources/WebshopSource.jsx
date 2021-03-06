import BasketActions from '../actions/BasketActions.jsx';
//import axios from 'axios';

const mockData = [
    {id: 1, price: 49, stock: 0, name: 'Football'},
    {id: 2, price: 9, stock: 5, name: 'Baseball'},
    {id: 3, price: 29, stock: 15, name: 'Basketball'},
    {id: 4, price: 99, stock: 5, name: 'iPod Touch'},
    {id: 5, price: 399, stock: 2, name: 'iPhone 5'},
    {id: 6, price: 199, stock: 9, name: 'Nexus 7'},
    {id: 7, price: 222, stock: 6, name: 'iPhone 7'},
    {id: 8, price: 199, stock: 9, name: 'Samsung 8'}
];

var WebshopSource = {

//    testFetchData() {
//
//        // http://alt.js.org/docs/async/
//        return {
//            remote() {
//                return axios.get('http://shopname.myshopify.com/products.json');
//                //return axios.get('https://jsonplaceholder.typicode.com/posts');
//            },
//
//            local() {
//                // Never check locally, always fetch remotely.
//                return null;
//            },
//
//            success: BasketActions.externalSource,
//            error: BasketActions.externalSourceError
//        }
//    }

    fetchProducts() {
        return {
            remote() {
                return new Promise(function (resolve, reject) {
                    // simulate an asynchronous flow where data is fetched on
                    // a remote server somewhere.
                    setTimeout(function () {

                        // change this to `false` to see the error action being handled.
                        if (true) {
                            // resolve with some mock data
                            resolve(mockData);
                        } else {
                            reject('Things have broken');
                        }
                    }, 250);
                });
            },

            local() {
                // Never check locally, always fetch remotely.
                return null;
            },

            success: BasketActions.updateProducts,
            error: BasketActions.fetchProductsFailed,
            loading: BasketActions.fetchProducts
        }
    }
};

export default WebshopSource;

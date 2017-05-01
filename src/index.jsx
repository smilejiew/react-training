import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

//import WebShop from './components/WebShop.jsx';
//
//const PRODUCTS = [
//    {id: 1, price: 49, stock: 0, name: 'Football'},
//    {id: 2, price: 9, stock: 5, name: 'Baseball'},
//    {id: 3, price: 29, stock: 15, name: 'Basketball'},
//    {id: 4, price: 99, stock: 5, name: 'iPod Touch'},
//    {id: 5, price: 399, stock: 2, name: 'iPhone 5'},
//    {id: 6, price: 199, stock: 9, name: 'Nexus 7'},
//    {id: 7, price: 222, stock: 6, name: 'iPhone 7'},
//    {id: 8, price: 199, stock: 9, name: 'Samsung 8'}
//];
//
//ReactDOM.render(
//    <WebShop products={PRODUCTS} />,
//    document.getElementById('app')
//);

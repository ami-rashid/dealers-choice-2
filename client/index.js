import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { fetchContainers, fetchBoxes, fetchItems, fetchContainer } from './components/store';
import { HashRouter as Router, Link, Route} from 'react-router-dom';
import ItemList from './components/ItemList'
import Item from './components/Item'
import ContainerList from './components/ContainerList';
import Container from './components/Container';
import App from './components/App'
  

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));

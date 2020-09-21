import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store, { fetchContainers, fetchBoxes, fetchItems } from './components/store';
import { HashRouter as Router, Link, Route} from 'react-router-dom';
import ItemList from './components/ItemList'
import Item from './components/Item'

class _App extends React.Component{
    constructor(){
      super();
    }
    componentDidMount(){
      this.props.load();
    }
    render(){
      return (
        <Router>
          <div className='container'>
            <ul>
              <li><Link to='/items'>ITEMS</Link></li>
            </ul>
            <Route path='/' exact component={ ItemList } />
            <Route path='/items' exact component={ ItemList } />
            <Route path='/items/:id' exact component={ Item } />
          </div>
        </Router>
      );
    }
  }
  
  const App = connect(
    (state)=> {
      return {
        state
      };
    },
    (dispatch)=> {
      return {
        load: ()=> {
          dispatch(fetchItems());
        }
      };
    },
  )(_App);
  

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));

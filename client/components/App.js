import React from 'react'
import ContainerList from './ContainerList'
import { connect } from 'react-redux'
import store, { fetchContainers, fetchBoxes, fetchItems, fetchContainer } from './store'
import { HashRouter as Router, Link, Route} from 'react-router-dom'
import ItemList from './ItemList'
import Item from './Item'
import Container from './Container'

class App extends React.Component{
    constructor(){
      super();
    }
    componentDidMount(){
      this.props.load();
    }
    render(){
      return (
        <div>
        <button>Create</button>
        <h2>Inventory</h2>
        <Router>
          <div className='container'>
            <Route path='/' component={ ContainerList } />
            <Route path='/containers' exact component={ ContainerList } />
            <Route path='/containers/:id' exact component={ Container } />
          </div>
        </Router>
        </div>
      );
    }
  }
  
  export default connect(
	  (state)=> {
		// console.log(state)
      return {
        state
      };
    },
    (dispatch)=> {
      return {
        load: ()=> {
		  dispatch(fetchContainers());
		  dispatch(fetchBoxes());
		  dispatch(fetchItems())
        }
      };
    },
  )(App);
